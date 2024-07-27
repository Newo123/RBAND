'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import classes from './Hero.module.scss';

export function HeroProjects({ count, image, text }) {
	return (
		<div className={classes.hero__projects}>
			<div className={classes.hero__projectsImage}>
				<motion.div
					initial={{ clipPath: 'circle(15%)' }}
					animate={{ clipPath: 'circle(100%)' }}
					transition={{ duration: 2, delay: 0.2 }}
					className={classes.hero__projectsMask}
				>
					<Image
						src={image}
						alt={text}
						fill
					/>
				</motion.div>
			</div>
			<div className={classes.hero__projectsCount}>
				{count}
				<span>+</span>
			</div>
			<div className={classes.hero__projectsText}>{text}</div>
		</div>
	);
}
