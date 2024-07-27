// const spacings = (function () {
//   // padding, margin, width, height, maxHeight, gap, inset, space и translate с шагом 2px(16*0.125rem)
//   const spacings = {};
//   for (let i = 0; i < 401; i++) {
//     spacings[i] = i * 0.125 + 'em';
//   }
//   return spacings;
// })();

const config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}'
	],
	corePlugins: {
		container: false
	},
	theme: {
		lineHeight: {
			100: '100%',
			110: '110%',
			120: '120%',
			130: '130%',
			140: '140%',
			150: '150%',
			160: '160%'
		},
		keyframes: {
			line: {
				' 0%': {
					width: '0%'
				},
				'80% ': {
					width: '100%'
				},
				'100%': {
					width: '0%'
				}
			},

			logoAnimation: {
				'0%': {
					opacity: '1'
				},
				'25%': {
					opacity: '0.6'
				},
				'50%': {
					opacity: '0.3'
				},
				'75%': {
					opacity: '0.6'
				},
				'100%': {
					opacity: '1'
				}
			}
		},
		animation: {
			line: 'line 2s 0.3s',
			logoAnimation: 'logoAnimation 1.5s infinite linear 0.3s'
		},
		// spacing: spacings,
		screens: {
			xs: '476px',
			sm: '576px',
			ssm: '680px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
			'3xl': '1920px'
		},
		extend: {}
	},
	plugins: []
};
export default config;
