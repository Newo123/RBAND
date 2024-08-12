import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IconComponent } from '@/components/shared/IconComponent';

import { fileAccept } from '@/constants/fileAccept.constants';

import { instanceUpload } from '@/utils/instance';

import classes from './UploadFile.module.scss';
import { UploadFileContentItem } from './UploadFileContentItem';

export const UploadFile = ({
	id_prefix,
	upload_file: { type, label, validation_description },
	register
}) => {
	const [files, setFiles] = useState([]);
	const fileRef = useRef(null);

	const addFiles = e => {
		Object.values(e.target.files).forEach(async (file, index) => {
			await setFiles(prev => [
				...prev,
				{
					id: uuidv4(),
					file: file,
					isLoading: true,
					url: ''
				}
			]);

			const data = await instanceUpload
				.post(
					'',
					{ file: file },
					{
						onUploadProgress: ({ loaded, total, progress, event, upload }) => {
							console.log(loaded, total, progress, upload);
						}
					}
				)
				.then(response => response.data)
				.catch(error => console.log(error));

			await setFiles(prev => [
				...prev.map(item => {
					if (item.file === file) {
						item.isLoading = false;

						item.url = '12312';
					}
					return item;
				})
			]);
		});
	};

	const deleteFiles = async id => {
		const url = files.find(item => item.id === id)?.url;

		setFiles(prev =>
			prev.map(item => {
				if (item.id === id) {
					item.isLoading = true;
				}

				return item;
			})
		);

		instanceUpload('', { url: url })
			.then(response => {})
			.catch(error => {
				setFiles(files.filter(file => file.id !== id));

				console.log(error);
			});
	};

	return (
		<div className={classes.upload}>
			<label
				htmlFor={id_prefix + type}
				className={classes.upload__label}
			>
				<IconComponent icon='ant-design:paper-clip-outlined' />
				<div className={classes.upload__text}>
					{label}
					<span>{validation_description}</span>
				</div>
				<input
					type='file'
					id={id_prefix + type}
					className={classes.upload__input}
					multiple
					hidden
					accept={fileAccept}
					onChange={addFiles}
				/>
			</label>
			{files.length > 0 && (
				<div className={classes.upload__content}>
					{files.map(item => (
						<UploadFileContentItem
							key={item.id}
							register={register}
							id_prefix={id_prefix}
							item={item}
							deleteFiles={deleteFiles}
							files={files}
						/>
					))}
				</div>
			)}
		</div>
	);
};
