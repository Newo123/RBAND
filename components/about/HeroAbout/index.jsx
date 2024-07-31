import cn from 'clsx';
import Image from 'next/image';

import { Container } from '@/components/shared/Container';

import classes from './HeroAbout.module.scss';

export function HeroAbout({ images, text, title, texts, videos }) {
	return (
		<section className={classes.heroAbout}>
			<Container
				variant='xl'
				className={classes.heroAbout__container}
			>
				<div className={classes.heroAbout__content}>
					<h1 className={cn('site-title-1', classes.heroAbout__title)}>
						{title}
					</h1>
					<p className={classes.heroAbout__text}>{text}</p>
				</div>
				{texts.length > 0 && (
					<div className={classes.heroAbout__texts}>
						{texts.map(
							(text, index) =>
								index % 2 === 1 && (
									<div
										key={index}
										className={classes.heroAbout__textsBox}
									>
										<p className={classes.heroAbout__textsItem}>
											{texts[index - 1]}
										</p>
										<p className={classes.heroAbout__textsItem}>{text}</p>
									</div>
								)
						)}
					</div>
				)}
			</Container>
			<div className={classes.heroAbout__pictures}>
				{images && (
					<Image
						src={images[0].href}
						alt={images[0].title}
						fill
					/>
				)}

				{videos && (
					<video
						loop
						autoPlay
						preload='auto'
						muted={true}
						playsInline
						controls={false}
					>
						<source
							src={videos[0].href}
							type='video/mp4'
						/>
					</video>
				)}
			</div>
		</section>
	);
}
