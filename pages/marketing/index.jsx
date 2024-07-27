import { Services } from '@/components/Services';

import { getAll } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await getAll(req, res, locale, resolvedUrl);

	if (!props.body.main) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			marketing: props,
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function ServicesPage({ marketing, localization }) {
	return (
		<Services
			services={marketing}
			localization={localization}
		/>
	);
}
