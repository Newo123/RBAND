import { revalidateService } from '@/services/revalidate.service';

export default async function handler(req, res) {
	if (req.headers.authorization !== process.env.MY_SECRET_TOKEN) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	const method = req.method || '';

	if (method) {
		await revalidateService[method](req, res);
	}
}
