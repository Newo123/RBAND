import { Montserrat } from 'next/font/google';
import Intro from 'next/font/local';

export const intro = Intro({
	src: [
		{
			path: '../public/fonts/IntroBlackCaps.ttf'
		},
		{
			path: '../public/fonts/IntroBlackCaps.woff'
		},
		{
			path: '../public/fonts/IntroBlackCaps.woff2'
		}
	],
	variable: '--font-intro',
	style: 'normal',
	weight: '900'
});
export const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-montserrat'
});
