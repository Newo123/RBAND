import { getPlaiceholder } from 'plaiceholder';

import { RootLayout } from '@/components/Layout/RootLayout';
import { PageWrapper } from '@/components/Layout/pageWrapper';
import { Reviews } from '@/components/Reviews';
import { Hero } from '@/components/shared/Hero';

import { API_DOMAIN } from '@/constants/seo.constants';

import { getAll } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await getAll(req, res, locale, resolvedUrl);

	if (!props.body.main) {
		return {
			notFound: true
		};
	}

	props.body.main.reviews = await Promise.all(
		props.body.main.reviews.map(async review => {
			const buffer = await fetch(API_DOMAIN + review.image_min).then(
				async res => Buffer.from(await res.arrayBuffer())
			);

			const { base64 } = await getPlaiceholder(buffer, {
				size: 10
			});
			review.placeholder = base64;

			return review;
		})
	).then(resolve => resolve);

	return { props: { reviews: props } };
};

export default function ReviewsPage({ reviews }) {
	return (
		<RootLayout
			footer={reviews.body.footer}
			header={reviews.body.header}
			head={reviews.head}
		>
			<Hero {...reviews.body.main} />
			<PageWrapper>
				<Reviews reviews={reviews.body.main.reviews} />
			</PageWrapper>
		</RootLayout>
	);
}
