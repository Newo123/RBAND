import { Contacts } from '@/components/Contacts';
import { RootLayout } from '@/components/Layout/RootLayout';

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
			contacts: props,
			domain,
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function Page({ contacts, domain }) {
	return (
		<RootLayout
			footer={contacts.body.footer}
			head={contacts.head}
			header={contacts.body.header}
			domain={domain}
		>
			<Contacts callback={contacts.body.main} />
		</RootLayout>
	);
}
