import { Providers } from '@/providers/providers';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	);
}
