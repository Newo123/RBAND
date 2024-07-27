import cn from 'clsx';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Switcher } from '@/components/ui/Switcher';
import { UploadFile } from '@/components/ui/UploadFile';

import classes from './Callback.module.scss';

export function Callback({
	form_description,
	form_items,
	form_title,
	id_prefix,
	privacy,
	submit_button
}) {
	let inputs = [];
	let switchers = {};
	let textarea = {};

	if (form_items.length > 0) {
		inputs = form_items.filter(
			item => item.name === 'name' || item.name === 'phone'
		);
		switchers = form_items.find(item => item.items && item.items?.length > 0);
		textarea = form_items.find(item => item.type === 'textarea');
	}

	const { register, handleSubmit } = useForm({
		mode: 'onChange'
	});

	const onSubmit = handleSubmit(data => {
		console.log(data);
	});

	return (
		<form
			className={cn(classes.form)}
			onSubmit={onSubmit}
		>
			<h3
				className={cn('site-title-3', classes.form__title)}
				dangerouslySetInnerHTML={{ __html: form_title }}
			/>
			<p
				className={classes.form__text}
				dangerouslySetInnerHTML={{ __html: form_description }}
			/>
			{inputs.length > 0 && (
				<div className={classes.form__inputs}>
					{inputs.map(input => (
						<Input
							{...register(input.name, {
								required: {
									value: input.require || false,
									message: 'Please enter'
								}
							})}
							key={input.name}
							type={input.type}
							name={input.name}
							label={input.label}
							id={input.id}
							className={classes.form__input}
						/>
					))}
				</div>
			)}

			{switchers && (
				<div className={classes.form__theme}>
					<span className={classes.form__label}>{switchers.label}</span>
					<div className={classes.form__themeTypes}>
						{switchers.items.map(switcher => (
							<Switcher
								key={switcher.label}
								id={switcher.label}
								name={switcher.label}
								value={switcher.value}
								isChecked={switcher.checked}
								label={switcher.label}
								type={switchers.type}
								required={switchers.require}
							/>
						))}
					</div>
				</div>
			)}

			{textarea && (
				<div className={classes.form__textarea}>
					<span className={classes.form__label}>{textarea.label}</span>
					<textarea
						name={textarea.name}
						id={textarea.type}
					></textarea>
				</div>
			)}

			<UploadFile />
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
