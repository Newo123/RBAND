import cookie from 'cookie';
import { setCookie } from 'cookies-next';

export const cookieTransfer = (response, req, res) => {
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
};
