'use server';

import { getPlaiceholder } from 'plaiceholder';

// import { API_DOMAIN } from '@/constants/seo.constants';

export async function unsplashLoader(src) {
	// const input = await fetch(API_DOMAIN + src);
	// const output = await sharp(await input.arrayBuffer())
	// 	.resize({
	// 		width: 10,
	// 		height: 10
	// 	})
	// 	.toBuffer();

	// console.log(output);
	// const buffer = await fetch(API_DOMAIN + src).then(async res =>
	// 	Buffer.from(await res.arrayBuffer())
	// );
	const buffer = await fetch(
		'https://plus.unsplash.com/premium_photo-1693221705305-6eff5fa8e483?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	).then(async res => Buffer.from(await res.arrayBuffer()));

	// const buffer = await fetch(API_DOMAIN + src).then(res => console.log(res));
	const { base64 } = await getPlaiceholder(buffer);

	return base64;
}
