import { Services } from '@/components/Services';

import { dataService } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await dataService.getAllData(req, res, locale, resolvedUrl);

	if (!props.body.main) {
		return {
			notFound: true
		};
	}
	const domain = `${req?.headers['x-forwarded-proto']}://${req?.headers['x-forwarded-host']}`;

	return {
		props: {
			marketing: props,
			domain,
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function ServicesPage({ marketing, domain, localization }) {
	return (
		<Services
			services={marketing}
			domain={domain}
			localization={localization}
		/>
	);
}
