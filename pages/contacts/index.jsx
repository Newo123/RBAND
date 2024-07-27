import { Contacts } from '@/components/Contacts';
import { RootLayout } from '@/components/Layout/RootLayout';

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
			contacts: props,
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function Page({ contacts }) {
	return (
		<RootLayout
			footer={contacts.body.footer}
			head={contacts.head}
			header={contacts.body.header}
		>
			<Contacts callback={contacts.body.main} />
		</RootLayout>
	);
}
