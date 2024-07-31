import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req, res) {
	if (
		req.nextUrl.pathname.startsWith('/_next') ||
		req.nextUrl.pathname.includes('/api/') ||
		PUBLIC_FILE.test(req.nextUrl.pathname)
	) {
		return;
	}
	if (
		req.cookies.get('NEXT_LOCALE')?.value &&
		req.cookies.get('NEXT_LOCALE')?.value !== req.nextUrl.locale
	) {
		const locale = req.cookies.get('NEXT_LOCALE')?.value;

		return NextResponse.redirect(
			new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
		);
	}

	return NextResponse.next();
}

// if (
// 	req.nextUrl.pathname.startsWith('/image') ||
// 	req.nextUrl.pathname.startsWith('/images') ||
// 	req.nextUrl.pathname.startsWith('/avatars')
// ) {
// 	return NextResponse.rewrite(
// 		new URL(API_DOMAIN + req.nextUrl.pathname, req.url)
// 	);
// }
