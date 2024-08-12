import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageTransition } from '../PageTransition';

import { Metadata } from './Metadata';

export function RootLayout({
	children,
	domain,
	footer,
	pageTitle = '',
	header,
	head
}) {
	const callback = {
		address: footer?.address,
		email: footer?.email[0],
		open: footer?.open[0],
		socials_array: footer?.socials_array,
		telephone: footer?.telephone,
		telephoneLink: footer?.telephoneLink,
		title: header?.form?.text_contact_title,
		form: {
			form_description: header?.form?.form_description,
			form_items: header?.form?.form_items,
			form_title: header?.form?.form_title,
			id_prefix: header?.form?.id_prefix,
			privacy: header?.form?.privacy,
			submit_button: header?.form?.submit_button
		}
	};

	return (
		<>
			<Metadata
				head={head}
				domain={domain}
			/>
			<PageTransition pageTitle={pageTitle}>
				<Header
					header={header}
					langs={Object.values(footer?.languages)}
					cities={footer?.cities}
					callback={callback}
				/>
				<main>{children}</main>
				<Footer footer={footer} />
			</PageTransition>
		</>
	);
}
