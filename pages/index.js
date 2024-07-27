import Home from '@/components/Home';

import { getAll } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await getAll(req, res, locale, resolvedUrl);

	if (!props) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			home: props,
			localization: (await import(`../locales/${locale}.json`)).default
		}
	};
};

export default function HomePage({ home, localization }) {
	return (
		<Home
			home={home}
			localization={localization}
		/>
	);
}
