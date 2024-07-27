import cn from 'clsx';

import classes from './Typography.module.scss';

export function Typography({
	children,
	className,
	classNameContainer,
	position,
	...rest
}) {
	return (
		<div
			className={cn(classes.typography, className)}
			{...rest}
		>
			<div
				className={cn(
					classes.typography__container,
					position === 'center' && classes.typography__container_block_center,
					classNameContainer
				)}
				dangerouslySetInnerHTML={{ __html: children }}
			/>
		</div>
	);
}
