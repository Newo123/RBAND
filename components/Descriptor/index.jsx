import { useGSAP } from '@gsap/react';
import cn from 'clsx';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useRef, useState } from 'react';

import { useScroll } from '@/hooks/useScroll';

import { Container } from '../shared/Container';
import { GetImagesFromNext } from '../shared/GetImagesFromNext';

import classes from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Descriptor({ descriptor, start, days, price }) {
	const [isPlay, setIsPlay] = useState(false);
	const [translateContent, setTranslateContent] = useState(0);
	const [opacityContent, setOpacityContent] = useState(1);
	const [scaleContent, setScaleContent] = useState(1);

	const quantityRef = useRef(null);
	const contentRef = useRef(null);
	const backgroundRef = useRef(null);
	const priceRef = useRef(null);
	const descriptorRef = useRef(null);
	const videoRef = useRef(null);
	const actionsRef = useRef(null);
	const { scroll } = useScroll();

	useEffect(() => {
		const translate = scroll / 40;
		const opacity = 1 - scroll / 1000;
		const scale = 1 - scroll / 2000;
		if (translate < 20) {
			setTranslateContent(translate);
		}
		if (opacity >= 0) {
			setOpacityContent(opacity);
		}
		if (scale >= 0) {
			setScaleContent(scale);
		}

		if (
			scroll > descriptorRef.current.clientHeight &&
			!videoRef.current?.paused &&
			isPlay
		) {
			videoRef.current?.pause();
		} else if (
			scroll <= descriptorRef.current.clientHeight &&
			videoRef.current?.paused &&
			isPlay
		) {
			videoRef.current?.play();
		}
	}, [scroll]);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.to(backgroundRef.current, {
			maskSize: '50dvh 50dvh',
			duration: 1
		})
			.to(backgroundRef.current, {
				maskSize: '100vw 100vh',
				delay: 0.5,
				duration: 1
			})
			.to(backgroundRef.current, { maskSize: '100% 100%' });

		gsap.to(actionsRef.current, {
			delay: 1.5,
			scale: 1,
			duration: 1,
			onComplete: () => {
				setIsPlay(true);
				if (videoRef.current?.readyState === 4) {
					videoRef.current?.play();
				}
			}
		});

		const arg = [];
		if (quantityRef?.current) arg.push(quantityRef?.current);
		if (contentRef?.current) arg.push(contentRef?.current);

		gsap.to(arg, {
			transform: 'none',
			scale: 1,
			duration: 1,
			delay: 1.6
		});

		gsap.to(priceRef.current, {
			opacity: 1,
			delay: 2.1,
			duration: 0.3
		});
	});

	const videoMedia = video => {
		let videoMedia;

		for (const key in video.property) {
			if (key === 'max_width')
				videoMedia = `(max-width:${video.property[key]}px)`;
		}

		return videoMedia || '';
	};

	return (
		<section
			className={cn(classes.descriptor)}
			id='descriptor'
			ref={descriptorRef}
		>
			<Container
				variant='xl'
				className={classes.descriptor__container}
			>
				<div
					className={classes.descriptor__actionsTrigger}
					ref={backgroundRef}
				>
					<div
						className={classes.descriptor__actions}
						ref={actionsRef}
					>
						{descriptor.description_images &&
							descriptor.description_images.length > 0 && (
								<div className={classes.descriptor__actionsImage}>
									<GetImagesFromNext
										images={descriptor.description_images}
										sizes='100vw'
										fill
									/>
								</div>
							)}
						{descriptor.description_videos &&
							descriptor.description_videos.length > 0 && (
								<div className={classes.descriptor__actionsVideo}>
									<video
										ref={videoRef}
										preload='auto'
										controls={false}
										autoPlay={isPlay}
										loop
										playsInline
										muted
									>
										{descriptor.description_videos.map((item, index) => {
											const props = {
												src: item.href,
												type: `video/${item.href.split('.')[item.href.split('.').length - 1]}`,
												...(item.property['max_width'] && {
													media: `${videoMedia(item)}`
												})
											};
											return (
												<source
													key={index}
													{...props}
												/>
											);
										})}
									</video>
								</div>
							)}
					</div>
				</div>

				<div
					style={{
						transform: `translateY(-${translateContent}%) scale(${scaleContent})`,
						position: 'relative',
						zIndex: '2',
						opacity: opacityContent,
						height: '100%'
					}}
				>
					<div
						className={classes.descriptor__content}
						ref={contentRef}
					>
						<h1
							className={cn('site-title-1', classes.descriptor__contentTitle)}
							dangerouslySetInnerHTML={{
								__html: descriptor?.title_page
							}}
						/>
						{descriptor.second_description && (
							<p
								className={classes.descriptor__contentText}
								dangerouslySetInnerHTML={{
									__html: descriptor.second_description
								}}
							/>
						)}
					</div>
				</div>

				<div className={classes.descriptor__right}>
					{descriptor.specialization_quantity && (
						<div
							className={classes.descriptor__rightQuantity}
							ref={quantityRef}
						>
							<div
								className={classes.descriptor__rightQuantityNumber}
								dangerouslySetInnerHTML={{
									__html: descriptor.specialization_quantity.quantity
								}}
							/>
							<div className={classes.descriptor__rightQuantityText}>
								{descriptor.specialization_quantity.text}
							</div>
						</div>
					)}
					{descriptor.days && descriptor.price && (
						<div
							className={classes.descriptor__rightPrice}
							ref={priceRef}
							style={
								isPlay
									? {
											transform: `translateY(-${translateContent}%) scale(${scaleContent})`,
											opacity: opacityContent
										}
									: {}
							}
							dangerouslySetInnerHTML={{
								__html: `${start} <span>${descriptor.price} ${price}</span> <span>${descriptor.days} ${days}</span>`
							}}
						/>
					)}
				</div>
			</Container>
		</section>
	);
}
