import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './Useful.module.scss';

export function UsefulSlider(slides) {
	return (
		<Swiper
			slidesPerView='auto'
			loop={true}
			className={classes.useful__slider}
		>
			{Object.values(slides).map((slide, index) => (
				<SwiperSlide
					className={classes.useful__sliderSlide}
					key={index}
				>
					<Link href={slide.href}>
						<div className={classes.useful__sliderSlideImg}>
							<Image
								src={slide.image}
								alt={slide.title}
								width={456}
								height={300}
							/>
						</div>
						<h6 className={classes.useful__sliderSlideTitle}>{slide.name}</h6>
						<p className={classes.useful__sliderSlideText}>
							{slide.meta_description}
						</p>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
