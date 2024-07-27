import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

import classes from './HeroInner.module.scss';

export function HeroInnerBackButton({ backLink }) {
	return (
		<Link
			href={backLink}
			className={classes.heroInner__contentBackButton}
		>
			<Icon icon='ic:sharp-chevron-left' />
		</Link>
	);
}
