import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '@/components/shared/Header';

import { SITE_DOMAIN } from '@/constants/seo.constants';

import { Footer } from '../../shared/Footer';

export function RootLayout({ children, footer, header, head }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>{head.title}</title>

				<meta
					name='description'
					content={head.description}
				/>
				{head.keywords && (
					<meta
						name='keywords'
						content={head.keywords}
					/>
				)}

				<meta
					httpEquiv='X-UA-Compatible'
					content='IE=edge'
				/>
				{head.icons.length > 0 &&
					head.icons.map(icon => (
						<link
							href={icon.image}
							rel='icon'
							type={`image/${icon.type}`}
							sizes={icon.size}
							key={icon.image}
						/>
					))}
				<link
					href={`${SITE_DOMAIN}${router.pathname}`}
					rel='canonical'
				/>
				{head.og &&
					Object.entries(head.og).map(([key, value]) => {
						if (!key && !value) return;
						if (key === 'og:url') {
							return (
								<meta
									key={key}
									property={key}
									content={`${SITE_DOMAIN}${router.pathname}`}
								/>
							);
						} else if (Array.isArray(value)) {
							return value.map(v => (
								<meta
									key={key}
									property={key}
									content={v}
								/>
							));
						} else if (value) {
							return (
								<meta
									key={key}
									property={key}
									content={value.toString()}
								/>
							);
						}
					})}
			</Head>
			<Header
				header={header}
				langs={Object.values(footer?.languages)}
				cities={footer?.cities}
			/>
			<main>{children}</main>
			<Footer footer={footer} />
		</>
	);
}
