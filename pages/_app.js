import { AnimatePresence } from 'framer-motion';

import { Providers } from '@/providers/providers';

import '@/styles/globals.scss';

export default function App({ Component, pageProps, router }) {
	return (
		<Providers>
			<AnimatePresence mode='wait'>
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
		</Providers>
	);
}
