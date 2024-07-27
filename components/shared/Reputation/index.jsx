import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from '../Container';
import { TextWrap } from '../TextWrap';

import { RatingItem } from './RatingItem';
import { ReputationSliderLink } from './ReputationSliderLink';
import classes from './styles.module.scss';

export function Reputation({ reputations, localization }) {
	const [isAutoplay, setIsAutoplay] = useState({});
	const sliderRef = useRef(null);
	const sliderContainerRef = useRef(null);
	const reputationRef = useRef(null);
	const swiperRef = useRef(null);

	const swiperOptions = {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		className: classes.reputation__slider,
		onSwiper: instance => (swiperRef.current = instance),
		ref: sliderRef,
		style: { opacity: 0, transform: 'translateY(100%)' },
		enabled: false,
		speed: 500,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,
			stopOnLastSlide: false,
			disableOnInteraction: false
		}
	};

	useGSAP(
		() => {
			ScrollTrigger.create({
				trigger: sliderContainerRef.current,
				start: 'top bottom',
				end: 'bottom top',
				animation: gsap.to(sliderRef.current, {
					opacity: 1,
					translateY: 0,
					delay: 1,
					onComplete: () => {
						swiperRef.current.autoplay.start();
					}
				}),
				onEnter: () => {
					swiperRef.current.enabled = true;
				}
			});
		},
		{
			scope: sliderContainerRef.current,
			dependencies: [isAutoplay, setIsAutoplay]
		}
	);

	return (
		<section className={classes.reputation}>
			<TextWrap
				images={reputations.title_svg}
				textImages={reputations.title}
				variant='reverse'
			/>
			<Container
				variant='xl'
				className={classes.reputation__container}
			>
				{Object.values(reputations.reviews_links_array).length > 0 && (
					<div className={classes.ratingList}>
						{Object.values(reputations.reviews_links_array).map(
							(reputation, index) => (
								<RatingItem
									image={reputation.icons.long}
									text={localization.services?.reputations.ratingText}
									title={localization.services?.reputations.ratingTitle}
									href={reputation.link}
									key={index}
									index={index}
								/>
							)
						)}
					</div>
				)}

				{reputations.reviews_array.length > 0 && (
					<div
						className={classes.reputation__sliderWrapper}
						id='reviews-slider'
						ref={sliderContainerRef}
					>
						<Swiper {...swiperOptions}>
							{reputations.reviews_array.map((item, index) => (
								<SwiperSlide
									className={classes.reputation__sliderSlide}
									key={index}
								>
									<div className={classes.reputation__sliderSlideContent}>
										<div
											className={classes.reputation__sliderSlideTitle}
											dangerouslySetInnerHTML={{ __html: item.name_project }}
										/>
										<div
											className={classes.reputation__sliderSlideText}
											dangerouslySetInnerHTML={{ __html: item.description }}
										/>
										<div
											className={classes.reputation__sliderSlideAuthor}
											dangerouslySetInnerHTML={{ __html: item.user }}
										/>
										{item.parents.length > 0 && (
											<ReputationSliderLink
												links={item.parents}
												localization={localization}
											/>
										)}
									</div>
									<div className={classes.reputation__sliderSlideImg}>
										<Image
											src={item.image}
											alt={item.name_project}
											fill
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				)}
			</Container>
		</section>
	);
}
