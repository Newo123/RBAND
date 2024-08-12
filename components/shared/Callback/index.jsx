import cn from 'clsx';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Switcher } from '@/components/ui/Switcher';
import { UploadFile } from '@/components/ui/UploadFile';

import classes from './Callback.module.scss';

export function Callback({
	form_description,
	form_items: { name, phone, message, type_project, upload_file },
	form_title,
	id_prefix,
	privacy,
	submit_button
}) {
	const { register, handleSubmit, reset, formState } = useForm({
		mode: 'onChange',
		defaultValues: {}
	});

	const onSubmit = data => {
		console.log(data);

		// reset();
	};

	console.log(name);

	return (
		<form
			className={cn(classes.form)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h3
				className={cn('site-title-3', classes.form__title)}
				dangerouslySetInnerHTML={{ __html: form_title }}
			/>
			<p
				className={classes.form__text}
				dangerouslySetInnerHTML={{ __html: form_description }}
			/>
			<div className={classes.form__inputs}>
				<Input
					{...register(name?.name, {
						...name?.validation
					})}
					type={name?.type}
					label={name?.label}
					id={id_prefix + name?.name}
					className={classes.form__input}
					errors={formState.errors['name']?.message}
				/>
				<Input
					{...register(phone?.name, {
						...phone?.validation
					})}
					type={phone?.type}
					label={phone?.label}
					id={id_prefix + phone?.name}
					className={classes.form__input}
					errors={formState.errors['phone']?.message}
				/>
			</div>

			{type_project && (
				<div className={classes.form__theme}>
					<span className={classes.form__label}>{type_project.label}</span>
					<div className={classes.form__themeTypes}>
						{type_project?.items?.map((switcher, index) => (
							<Switcher
								key={switcher?.label}
								id={id_prefix + 'type_project_' + (index + 1)}
								value={switcher?.value}
								isChecked={switcher?.checked}
								label={switcher?.label}
								type={type_project?.type}
								required={switcher?.require}
								register={register}
								id_prefix={id_prefix}
							/>
						))}
					</div>
				</div>
			)}

			{message && (
				<div className={classes.form__textarea}>
					<span className={classes.form__label}>{message.label}</span>
					<textarea {...register('message')}></textarea>
				</div>
			)}

			<UploadFile
				id_prefix={id_prefix}
				upload_file={upload_file}
				register={register}
			/>
			<div className={classes.form__actions}>
				<p
					className={classes.form__privacy}
					dangerouslySetInnerHTML={{ __html: privacy }}
				/>
				<Button className={classes.form__submit}>{submit_button}</Button>
			</div>
		</form>
	);
}
