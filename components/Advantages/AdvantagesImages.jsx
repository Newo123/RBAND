import cn from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import classes from './styles.module.scss';

export function AdvantagesImages({ advantages, isHome }) {
	const router = useRouter();
	return (
		<div
			className={cn(
				classes.advantages__imgContainer,
				isHome ? classes.advantages__imgContainer_rounded : '',
				isHome ? classes.advantages__imgContainer_gray : ''
			)}
		>
			{advantages.map((advantage, index) => (
				<div
					className={cn(
						classes.advantages__img,
						advantage.isActive === true ? classes.active : '',
						isHome ? classes.advantages__img_home : ''
					)}
					key={index}
				>
					<Image
						src={advantage.path || advantage.image}
						fill={true}
						alt={advantage.name}
						sizes='100vw'
					/>
				</div>
			))}
		</div>
	);
}
