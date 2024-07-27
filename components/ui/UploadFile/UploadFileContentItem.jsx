import cn from 'clsx';

import { IconComponent } from '@/components/shared/IconComponent';

import classes from './UploadFile.module.scss';

export function UploadFileContentItem({ isPending, text }) {
	return (
		<div
			className={cn(
				classes.upload__contentItem,
				isPending && classes.upload__contentItem_loading
			)}
		>
			<div className={classes.upload__icon}>
				{isPending ? (
					<IconComponent icon='line-md:loading-twotone-loop' />
				) : (
					<IconComponent icon='basil:cross-outline' />
				)}
			</div>
			<span>{text}</span>
		</div>
	);
}
