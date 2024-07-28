import { useRouter } from 'next/router';

import Home from '@/components/Home';
import { Services } from '@/components/Services';

import { getAll } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await getAll(req, res, locale, resolvedUrl);

	if (!props?.body?.main) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			city: props,
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function CityPage({ city, localization }) {
	const router = useRouter();
	let isHome;

	if (router.defaultLocale === router.locale) {
		isHome = `${router.asPath}`;
	} else {
		isHome = `/${router.locale}${router.asPath}`;
	}

	return isHome === city.body.header.home ? (
		<Home
			home={city}
			localization={localization}
		/>
	) : (
		<Services
			services={city}
			localization={localization}
		/>
	);
}
