import cn from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

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
	image,
	text,
	title,
	textColor,
	video,
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
						video ? classes.ourProjects__itemImgShadow : ''
					)}
				>
					{image && placeholder !== '' ? (
						<Image
							src={image}
							fill={true}
							alt={title}
							placeholder='blur'
							blurDataURL={placeholder}
						/>
					) : (
						<Image
							src={image}
							fill={true}
							alt={title}
						/>
					)}

					{video && (
						<motion.video
							loop
							autoPlay
							preload='auto'
							muted={true}
							playsInline
							controls={false}
							poster={image}
							ref={videoRef}
							onViewportEnter={handleEnter}
							onViewportLeave={handleLeave}
						>
							<source
								src={video}
								type='video/mp4'
							/>
						</motion.video>
					)}
				</div>

				<h6 className={classes.ourProjects__itemTitle}>{title}</h6>
				<p className={classes.ourProjects__itemText}>{text}</p>
			</Link>
		</motion.div>
	);
}
