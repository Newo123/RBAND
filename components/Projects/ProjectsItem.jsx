import cn from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { getVideoMedia } from '@/utils/getVideoMedia';

import { GetImagesFromNext } from '../shared/GetImagesFromNext';

import classes from './styles.module.scss';

const animation = {
	inactive: {
		transform: 'translateY(50%)',
		opacity: 0
	},
	active: {
		transform: 'translateY(0%)',
		opacity: 1
	}
};

export function ProjectsItem({
	href,
	images,
	text,
	title,
	textColor,
	videos,
	placeholder,
	target
}) {
	const itemRef = useRef(null);
	const animationRef = useRef(null);
	const videoRef = useRef(null);

	const handleEnter = e => {
		const video = e.target;
		video.play();
	};
	const handleLeave = e => {
		const video = e.target;
		video.pause();
	};

	return (
		<motion.div
			initial='inactive'
			whileInView='active'
			variants={animation}
			ref={animationRef}
			transition={{ duration: 0.75 }}
			viewport={{ once: true }}
		>
			<Link
				href={href}
				className={cn(
					classes.ourProjects__item,
					textColor === 'white' ? classes.ourProjects__textWhite : ''
				)}
				ref={itemRef}
				target={target ? '_blank' : ''}
			>
				<div
					className={cn(
						classes.ourProjects__itemImg,
						videos ? classes.ourProjects__itemImgShadow : ''
					)}
				>
					{images && (
						<GetImagesFromNext
							images={images}
							sizes='100vw'
							fill
						/>
					)}

					{videos && (
						<motion.video
							loop
							autoPlay
							preload='auto'
							muted={true}
							playsInline
							controls={false}
							ref={videoRef}
							onViewportEnter={handleEnter}
							onViewportLeave={handleLeave}
						>
							{videos.map((item, index) => {
								const props = {
									src: item.href,
									type: `video/${item.href.split('.')[item.href.split('.').length - 1]}`,
									...(item.property['max_width'] && {
										media: `${getVideoMedia(item)}`
									})
								};
								return (
									<source
										key={index}
										{...props}
									/>
								);
							})}
						</motion.video>
					)}
				</div>

				<h6 className={classes.ourProjects__itemTitle}>{title}</h6>
				<p className={classes.ourProjects__itemText}>{text}</p>
			</Link>
		</motion.div>
	);
}
