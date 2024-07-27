import { useGSAP } from '@gsap/react';
import cn from 'clsx';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

import classes from './styles.module.scss';

export function StagesImages({ content }) {
	const imageContainerRef = useRef(null);
	useGSAP(() => {
		gsap.to(imageContainerRef.current, {
			scrollTrigger: {
				trigger: imageContainerRef.current
			},
			opacity: 1,
			delay: 0.3
		});
	});
	return (
		<div
			className={classes.stages__imagesContainer}
			ref={imageContainerRef}
			style={{ opacity: 0 }}
		>
			{content &&
				content.length > 0 &&
				content.map(stage => (
					<div
						className={cn(
							classes.stages__img,
							stage.isActive ? classes.stages__imgActive : ''
						)}
						key={stage.sort}
					>
						<Image
							src={stage.path}
							fill={true}
							alt={stage.title}
						/>
					</div>
				))}
		</div>
	);
}
