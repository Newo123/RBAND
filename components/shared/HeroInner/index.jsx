import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Container } from '../Container';
import { GetImagesFromNext } from '../GetImagesFromNext';

import classes from './HeroInner.module.scss';
import { HeroInnerBackButton } from './HeroInnerBackButton';

export function HeroInner({ innerInfo, text, title, images, image, backLink }) {
	const containerRef = useRef(null);
	const heightRef = useRef(null);
	const imageRef = useRef(null);
	const [size, setSize] = useState(0);
	const [heightOff, setHeightOff] = useState(0);

	const { scrollYProgress } = useScroll({
		target: containerRef
	});

	const scale = useTransform(scrollYProgress, [0, 1], ['1', '0.8']);
	const opacity = useTransform(scrollYProgress, [0, 0.6], ['1', '.4']);
	// [0, 0.6]
	const maxHeight = useTransform(
		scrollYProgress,
		[0, 1],
		[`${heightOff}px`, '0px']
	);

	const handleResize = () => {
		setSize(window.innerWidth);
		setHeightOff(heightRef.current?.offsetHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		setSize(window.innerWidth);
		setHeightOff(heightRef.current?.offsetHeight);
		return () => window.removeEventListener('resize', handleResize);
	}, [setSize, size, setHeightOff]);

	return (
		<>
			<motion.section
				className={classes.heroInner}
				ref={containerRef}
			>
				<motion.div
					ref={heightRef}
					style={size > 992 && { maxHeight }}
					className={classes.heroInner__wrapper}
				>
					<Container
						className={classes.heroInner__container}
						variant='xl'
					>
						<motion.div
							style={{ scale, opacity }}
							className={classes.heroInner__content}
						>
							<HeroInnerBackButton backLink={backLink} />
							<h1 className={classes.heroInner__contentTitle}>{title}</h1>
							<p className={classes.heroInner__contentText}>{text}</p>
						</motion.div>
						{innerInfo && innerInfo?.length > 0 && (
							<div className={classes.heroInner__box}>
								{innerInfo.map((info, index) => (
									<div
										key={index}
										className={classes.heroInner__boxLine}
									>
										<div className={classes.heroInner__boxLineTitle}>
											{info.title}
										</div>
										<div className={classes.heroInner__boxLineText}>
											{info.text}
										</div>
									</div>
								))}
							</div>
						)}
					</Container>
				</motion.div>
			</motion.section>
			{images && images.length > 0 && (
				<motion.div
					ref={imageRef}
					className={classes.heroInner__img}
				>
					<GetImagesFromNext
						images={images}
						width={1920}
						height={1080}
					/>
				</motion.div>
			)}
			{image && (
				<motion.div
					ref={imageRef}
					className={classes.heroInner__img}
				>
					<Image
						src={image}
						alt='img'
						fill
					/>
				</motion.div>
			)}
		</>
	);
}
