import { GoogleAnalytics } from '@next/third-parties/google';
import { YandexMetricaProvider } from 'next-yandex-metrica';

import { FontsProvider } from './Fonts.provider';
import ModalProvider from './Modal.provider';
import SmoothScrollProvider from './SmoothScroll.provider';

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
			<SmoothScrollProvider>
				<ModalProvider>
					<FontsProvider>{children}</FontsProvider>
				</ModalProvider>
			</SmoothScrollProvider>
			<GoogleAnalytics gaId='UA-138430986-1' />
		</YandexMetricaProvider>
	);
}
