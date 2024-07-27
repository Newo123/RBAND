import cn from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useParallax } from '@/hooks/useParallax';

import { Container } from '../Container';

import classes from './Hero.module.scss';
import { HeroProjects } from './HeroProjects';
import { HeroReviews } from './HeroReviews';

export function Hero({
	title,
	inners,
	description,
	reviews_links_array,
	reputation_description,
	projects
}) {
	const { opacity, scale } = useParallax();
	const router = useRouter();

	return (
		<section className={classes.hero}>
			<motion.div style={{ scale, opacity }}>
				<Container
					variant='xl'
					className={classes.hero__container}
				>
					<div className={classes.hero__content}>
						<h1 className={cn(classes.hero__title, 'site-title-2')}>{title}</h1>
						<p className={classes.hero__text}>{description}</p>
						{inners && inners.length > 0 && (
							<div className={classes.hero__inners}>
								{inners.map((inner, index) => (
									<Link
										href={inner.href}
										key={index}
										className={cn(
											classes.hero__innersLink,
											(router.defaultLocale === router.locale
												? router.asPath
												: `/${router.locale}${router.asPath}`) === inner.href &&
												classes.hero__innersLink_active
										)}
										locale={router.locale}
									>
										<span>{inner.name}</span>
									</Link>
								))}
							</div>
						)}
					</div>
					{reviews_links_array && reputation_description && (
						<HeroReviews
							reputation_description={reputation_description}
							reviews_links_array={reviews_links_array}
						/>
					)}
					{projects && <HeroProjects {...projects} />}
				</Container>
			</motion.div>
		</section>
	);
}
