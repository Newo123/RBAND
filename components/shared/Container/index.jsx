import cn from 'clsx';

import classes from './Container.module.scss';

export function Container({ variant, children, className, ...rest }) {
	return (
		<div
			className={cn(
				variant ? classes[`container_${variant}`] : classes.container,
				className
			)}
			{...rest}
		>
			{children}
		</div>
	);
}
