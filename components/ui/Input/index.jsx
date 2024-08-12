import cn from 'clsx';
import { forwardRef, useState } from 'react';

import classes from './input.module.scss';

export const Input = forwardRef(function (
	{ label, className, errors, ...rest },
	ref
) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div
			className={cn(
				classes.input,
				isFocused && classes.input_focused,
				className
			)}
		>
			<label
				htmlFor={rest.id}
				className={classes.input__label}
			>
				{label}
			</label>
			<input
				ref={ref}
				{...rest}
				onFocus={() => setIsFocused(true)}
				onBlur={e => !e.target.value && setIsFocused(!isFocused)}
				className={classes.input__input}
			/>
			{errors && <span>{errors}</span>}
		</div>
	);
});

Input.displayName = 'field';
