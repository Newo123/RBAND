import { getPlaiceholder } from 'plaiceholder';

import { RootLayout } from '@/components/Layout/RootLayout';
import { PageWrapper } from '@/components/Layout/pageWrapper';
import { Reviews } from '@/components/Reviews';
import { Hero } from '@/components/shared/Hero';

import { dataService } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await dataService.getAllData(req, res, locale, resolvedUrl);
	if (!props.body.main) {
		return {
			notFound: true
		};
	}
	const domain = `${req?.headers['x-forwarded-proto']}://${req?.headers['x-forwarded-host']}`;

	props.body.main.reviews = await Promise.all(
		props.body.main.reviews.map(async review => {
			const buffer = await fetch(
				process.env.API_DOMAIN + review.image_min
			).then(async res => Buffer.from(await res.arrayBuffer()));

			const { base64 } = await getPlaiceholder(buffer, {
				size: 10
			});
			review.placeholder = base64;

			return review;
		})
	).then(resolve => resolve);

	return { props: { reviews: props, domain } };
};

export default function ReviewsPage({ reviews, domain }) {
	return (
		<RootLayout
			footer={reviews.body.footer}
			header={reviews.body.header}
			head={reviews.head}
			domain={domain}
		>
			<Hero {...reviews.body.main} />
			<PageWrapper>
				<Reviews reviews={reviews.body.main.reviews} />
			</PageWrapper>
		</RootLayout>
	);
}
