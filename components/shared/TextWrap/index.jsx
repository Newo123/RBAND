import cn from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import classes from './styles.module.scss';

export const TextWrap = ({
	children,
	className,
	variant,
	images,
	textImages,
	...rest
}) => {
	const itemRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: itemRef,
		offset: ['start end', 'end start']
	});
	const translateX = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
	const translateXReverse = useTransform(
		scrollYProgress,
		[0, 1],
		['50%', '-50%']
	);
	const isReversed = variant === 'reverse' ? 1 : 0;

	return (
		<div
			className={cn(classes.textWrap, className)}
			ref={itemRef}
			{...rest}
		>
			<h2 className={classes.textWrap__itemText}>{textImages}</h2>

			{images.length > 0 &&
				images.map((image, index) => (
					<motion.div
						className={classes.textWrap__item}
						style={{
							x: index % 2 === isReversed ? translateX : translateXReverse
						}}
						key={index}
					>
						<img
							src={image}
							alt='text wrap'
						/>
					</motion.div>
				))}
		</div>
	);
};
