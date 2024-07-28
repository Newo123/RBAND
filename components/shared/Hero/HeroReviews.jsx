import Image from 'next/image';

import classes from './Hero.module.scss';

export function HeroReviews({ reputation_description, reviews_links_array }) {
	return (
		<button className={classes.hero__reviews}>
			<div
				className={classes.hero__reviewsText}
				dangerouslySetInnerHTML={{ __html: reputation_description }}
			/>
			{reviews_links_array && (
				<div className={classes.hero__reviewsIcons}>
					<div className={classes.hero__reviewsIconsIcon}>
						<Image
							src={`${reviews_links_array.Yandex?.icons.short}`}
							alt={
								reviews_links_array.Yandex?.link
									? reviews_links_array.Yandex?.link
									: ''
							}
							width={25}
							height={25}
						/>
						<span>{reviews_links_array.Yandex?.points}</span>
					</div>
					<div className={classes.hero__reviewsIconsIcon}>
						<Image
							src={`${reviews_links_array.Google?.icons.short}`}
							alt={
								reviews_links_array.Google?.link
									? reviews_links_array.Google?.link
									: ''
							}
							width={25}
							height={25}
						/>
						<span>{reviews_links_array.Google?.points}</span>
					</div>
				</div>
			)}
		</button>
	);
}
