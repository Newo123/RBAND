import Image from 'next/image';
import Link from 'next/link';

import classes from './Reviews.module.scss';

export function ReviewsItem({
	image,
	name_project,
	description,
	parents,
	user,
	placeholder
}) {
	const parentsLink =
		typeof parents.parents_array === 'object'
			? Object.values(parents.parents_array)
			: [];
	return (
		<div className={classes.reviews__item}>
			<div className={classes.reviews__itemImage}>
				<Image
					src={image}
					alt={name_project}
					fill
					sizes='100vw'
					placeholder='blur'
					blurDataURL={placeholder}
				/>
			</div>
			<div className={classes.reviews__itemContent}>
				<h6
					className={classes.reviews__itemTitle}
					dangerouslySetInnerHTML={{ __html: name_project }}
				/>
				<p
					className={classes.reviews__itemText}
					dangerouslySetInnerHTML={{ __html: description }}
				/>
				<p
					className={classes.reviews__itemAuthor}
					dangerouslySetInnerHTML={{ __html: user }}
				/>
				{parentsLink.length > 0 && (
					<div className={classes.reviews__itemLinks}>
						<span>{parents.title_parents}</span>
						<div className={classes.reviews__itemLinksBox}>
							{parentsLink.map((link, index) => (
								<div key={index}>
									{index > 0 && (
										<span style={{ color: '#000', paddingRight: '.625rem' }}>
											|
										</span>
									)}
									<Link
										href={link.href}
										target={link.target}
									>
										{link.text}
									</Link>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
