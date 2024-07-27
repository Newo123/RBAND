import { usePagination } from '@/hooks/usePagination';

import { Container } from '../shared/Container';

import classes from './Reviews.module.scss';
import { ReviewsItem } from './ReviewsItem';

export function Reviews({ reviews }) {
	const { items } = usePagination(reviews, 10);
	return (
		reviews &&
		reviews.length && (
			<section className={classes.reviews}>
				<Container
					className={classes.reviews__container}
					variant='xl'
				>
					{items.map((review, index) => (
						<ReviewsItem
							key={index}
							buffer={review.buffer}
							image={review.image}
							name_project={review.name_project}
							description={review.description}
							parents={review.parents}
							user={review.user}
							placeholder={review.placeholder || ''}
						/>
					))}
				</Container>
			</section>
		)
	);
}
