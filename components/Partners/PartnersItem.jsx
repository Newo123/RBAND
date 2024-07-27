import Image from 'next/image';
import Link from 'next/link';

import classes from './styles.module.scss';

export function PartnersItem({ href, image }) {
	return (
		<Link
			href={href}
			className={classes.partners__item}
			target={href.startsWith('https') && '_blank'}
		>
			<Image
				src={image}
				alt='Partner'
				width={160}
				height={52}
			/>
		</Link>
	);
}
