import { GoogleAnalytics } from '@next/third-parties/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YandexMetricaProvider } from 'next-yandex-metrica';

import { FontsProvider } from './Fonts.provider';
import ModalProvider from './Modal.provider';
import SmoothScrollProvider from './SmoothScroll.provider';

const queryClient = new QueryClient();

export function Providers({ children }) {
	return (
		<YandexMetricaProvider
			tagID={32609040}
			initParameters={{
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true
			}}
		>
			<QueryClientProvider client={queryClient}>
				<SmoothScrollProvider>
					<FontsProvider>
						<ModalProvider>{children}</ModalProvider>
					</FontsProvider>
				</SmoothScrollProvider>
			</QueryClientProvider>
			<GoogleAnalytics gaId='UA-138430986-1' />
		</YandexMetricaProvider>
	);
}
