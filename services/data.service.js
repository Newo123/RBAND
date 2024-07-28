import cookie from 'cookie';
import { getCookie, setCookie } from 'cookies-next';

import { httpsAgent } from '@/constants/httpsAgent.constants';

import { instanceGetPageData, instanceLoginApi } from '@/utils/instance';

export const loginApiService = async (req, res) => {
	const token = await instanceLoginApi
		.post('', {}, { httpsAgent })
		.then(response => response.data.api_token)
		.catch(error => {
			// loginApiService();
		});

	setCookie('api_token', token, {
		req,
		res,
		maxAge: 60 * 6 * 24,
		partitioned: true
	});

	return token;
};

export const getAll = async (req, res, locale, url) => {
	if (!getCookie('api_token', { req, res })) {
		const token = await loginApiService(req, res);
	}
	const response = await instanceGetPageData
		.get('', {
			httpsAgent,
			params: {
				api_token: getCookie('api_token', { req, res }),
				link: `/${locale}${url}`
			},
			headers: {
				cookie: req.headers.cookie
			}
		})
		.catch(error => {});

	if (!response || response.status !== 200) {
		return {
			notFound: true
		};
	}

	response.headers['set-cookie'].forEach(item => {
		const {
			expires,
			['Max-Age']: maxAge,
			path,
			domain,
			HttpOnly,
			Secure,
			...rest
		} = cookie.parse(item);
		setCookie(Object.keys(rest).toString(), Object.values(rest).toString(), {
			req,
			res,
			...(path && { path }),
			...(maxAge && { maxAge: Number(maxAge) })
		});
	});

	// res.setHeader(
	// 	'Cache-Control',
	// 	'public, s-maxage=60480000, stale-while-revalidate=8640000'
	// );

	return response.data;
};
