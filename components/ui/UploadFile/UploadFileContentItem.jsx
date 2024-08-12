import cn from 'clsx';

import { IconComponent } from '@/components/shared/IconComponent';

import classes from './UploadFile.module.scss';

export const UploadFileContentItem = ({
	register,
	id_prefix,
	item,
	deleteFiles,
	files
}) => {
	return (
		item && (
			<div
				className={cn(
					classes.upload__contentItem,
					item.isLoading && classes.upload__contentItem_loading
				)}
			>
				<div
					className={classes.upload__icon}
					onClick={!item.isLoading ? () => deleteFiles(item.id) : undefined}
				>
					{item.isLoading ? (
						<IconComponent icon='line-md:loading-twotone-loop' />
					) : (
						<IconComponent icon='basil:cross-outline' />
					)}
				</div>
				<span>{item.file.name}</span>
				<input
					id={id_prefix + 'file'}
					type='checkbox'
					checked
					value={item.url}
					{...register('uploads')}
				/>
			</div>
		)
	);
};
