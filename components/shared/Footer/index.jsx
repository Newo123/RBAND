import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../Container';
import { TransitionLink } from '../TransitionLink';

import classes from './styles.module.scss';

export function Footer({ footer }) {
	const date = new Date(Date.now()).getFullYear();

	return (
		<footer className={classes.footer}>
			<Container
				variant='xl'
				className={classes.footer__container}
			>
				<div className={classes.footer__company}>
					<Link
						href={footer.home}
						className={classes.footer__logo}
					>
						RBAND
					</Link>

					<p
						className={classes.footer__companyText}
						dangerouslySetInnerHTML={{ __html: footer.text_footer_text }}
					/>
				</div>
				<div className={classes.footer__content}>
					<div className={classes.footer__contacts}>
						<div className={classes.footer__contactsTop}>
							<Link
								className={cn(
									'under-line-white',
									classes.footer__contactsPhone
								)}
								href={`tel:${footer.telephoneLink}`}
							>
								{footer.telephone}
							</Link>
							<p className={classes.footer__contactsOperating}>{footer.open}</p>
						</div>
						<Link
							href={`mailto:${footer.email}`}
							className={cn('under-line-white', classes.footer__contactsMail)}
						>
							{footer.email}
						</Link>
					</div>
					{footer.socials_array && (
						<div className={classes.footer__socials}>
							<Link
								href={footer.socials_array.WhatsApp}
								className={cn('under-line-white', classes.footer__socialsItem)}
								target='_blank'
							>
								{Object.keys(footer.socials_array)[0]}
							</Link>
							<Link
								href={footer.socials_array.Telegram}
								className={cn('under-line-white', classes.footer__socialsItem)}
								target='_blank'
							>
								{Object.keys(footer.socials_array)[1]}
							</Link>
							<Link
								href={footer.socials_array.Behance}
								className={cn('under-line-white', classes.footer__socialsItem)}
								target='_blank'
							>
								{Object.keys(footer.socials_array)[2]}
							</Link>
						</div>
					)}
					{footer.services.length > 0 && (
						<div className={classes.footer__services}>
							{footer.services.map((service, index) => (
								<div
									className={classes.footer__servicesItem}
									key={index}
								>
									<TransitionLink
										href={service.href}
										className={cn(
											'under-line-white-bg',
											classes.footer__servicesItemLink
										)}
									>
										{service.name}
									</TransitionLink>
								</div>
							))}
						</div>
					)}
				</div>
				<div className={classes.footer__info}>
					<button className={classes.footer__reviews}>
						<p className={classes.footer__reviewsText}>смотреть Отзывы</p>
						<div className={classes.footer__reviewsLinks}>
							<div className={classes.footer__reviewsItem}>
								<div className={classes.footer__reviewsItemImg}>
									<Image
										src={footer.reviews_links_array['Yandex'].icons.short}
										alt='review-yandex'
										fill
									/>
								</div>
								5.0
							</div>
							<div className={classes.footer__reviewsItem}>
								<div className={classes.footer__reviewsItemImg}>
									<Image
										src={footer.reviews_links_array['Google'].icons.short}
										alt='review-google'
										fill
									/>
								</div>
								5.0
							</div>
						</div>
					</button>
					<div className={classes.footer__copyright}>
						<span>&copy; 2015 - {date} RBAND</span>
						<span className='under-line-gray'>
							{footer.text_footer_privacy}
						</span>
					</div>
				</div>
			</Container>
		</footer>
	);
}
