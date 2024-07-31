import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// output: 'standalone',

	i18n: {
		locales: ['ru', 'en', 'sr'],
		defaultLocale: 'ru',
		localeDetection: false
	},

	trailingSlash: false,
	experimental: {
		largePageDataBytes: 128 * 10000000000,
		optimizePackageImports: [
			'gsap',
			'@gsap/react',
			'@iconify/react',
			'swiper',
			'framer-motion',
			'@plaiceholder/next',
			'plaiceholder'
		]
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60,
		// dangerouslyAllowSVG: true,
		// contentDispositionType: 'attachment',
		// contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		// deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		// imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'rband-backend.rbnd'
			},
			{
				protocol: 'https',
				hostname: 'rbb.rband.pro'
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com'
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/image/:path*',
				destination: `${process.env.API_DOMAIN}/image/:path*`
			},
			{
				source: '/images/:path*',
				destination: `${process.env.API_DOMAIN}/images/:path*`
			},
			{
				source: '/avatars/:path*',
				destination: `${process.env.API_DOMAIN}/avatars/:path*`
			}
		];
	}
};

export default withPlaiceholder(nextConfig);
