'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import Image from 'next/image';

import classes from './LightBox.module.scss';

export function LightBox({ image, title, state, setState }) {
	return (
		<motion.div
			className={classes.lightbox}
			onClick={() => setState(false)}
			initial={{
				opacity: 0
			}}
			whileInView={{
				opacity: 1
			}}
			exit={{
				opacity: 0
			}}
			data-lenis-prevent={state}
		>
			<button className={classes.lightbox__close}>
				<Icon icon='iconamoon:close-thin' />
			</button>
			<div className={classes.lightbox__image}>
				<Image
					src={image}
					alt={title}
					width={585}
					height={813}
					onClick={e => e.stopPropagation()}
				/>
			</div>
		</motion.div>
	);
}
