import Home from '@/components/Home';

import { dataService } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await dataService.getAllData(req, res, locale, resolvedUrl);

	if (!props) {
		return {
			notFound: true
		};
	}

	const domain = `${req?.headers['x-forwarded-proto']}://${req?.headers['x-forwarded-host']}`;

	return {
		props: {
			home: props,
			domain,
			pageTitle: 'Home',
			localization: (await import(`../locales/${locale}.json`)).default
		}
	};
};

export default function HomePage({ home, domain, pageTitle, localization }) {
	return (
		<Home
			home={home}
			domain={domain}
			localization={localization}
			pageTitle={pageTitle}
		/>
	);
}
