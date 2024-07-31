import axios from 'axios';
import https from 'https';

axios.defaults.httpsAgent = new https.Agent({
	rejectUnauthorized: false
});
export const instance = axios.create({
	baseURL: process.env.API_URL
});

export const instanceLoginApi = axios.create({
	baseURL: process.env.API_URL + '/route/login',
	headers: {
		'Content-Type': 'multipart/form-data'
	}
});

instanceLoginApi.interceptors.request.use(
	async function (config) {
		config.data = await {
			username: process.env.API_USERNAME || '',
			key: process.env.API_KEY || ''
		};

		return config;
	},
	async function (error) {
		return Promise.reject(error);
	}
);

export const instanceGetPageData = axios.create({
	baseURL: process.env.API_URL + `/route/getPageForLink`
});

// instanceGetPageData.interceptors.request.use(
// 	async function (config) {
// 		console.log(config.headers);

// 		return config;
// 	},
// 	async function (error) {
// 		return Promise.reject(error);
// 	}
// );
