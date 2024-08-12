import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import Home from '@/components/Home';
import { Services } from '@/components/Services';

import { dataService } from '@/services/data.service';

export const getServerSideProps = async ({
	req,
	res,
	locale,
	resolvedUrl,
	params
}) => {
	const props = await dataService.getAllData(req, res, locale, resolvedUrl);

	if (!props?.body?.main) {
		return {
			notFound: true
		};
	}
	const domain = `${req?.headers['x-forwarded-proto']}://${req?.headers['x-forwarded-host']}`;
	setCookie('city_slug', params?.city[0], {
		req,
		res
	});

	return {
		props: {
			city: props,
			domain,
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function CityPage({ city, domain, localization }) {
	const router = useRouter();
	let isHome;

	if (router.defaultLocale === router.locale) {
		isHome = `${router.asPath}`;
	} else {
		isHome = `/${router.locale}${router.asPath}`;
	}

	return isHome === city.body.header.home.href ? (
		<Home
			home={city}
			domain={domain}
			localization={localization}
		/>
	) : (
		<Services
			services={city}
			domain={domain}
			localization={localization}
		/>
	);
}
