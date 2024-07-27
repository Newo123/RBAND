class RevalidateService {
	async GET(req, res) {
		console.log('GET');
	}
	async POST(req, res) {
		const pathname = req.body.pathname;

		if (pathname) {
			await res
				.revalidate(pathname)
				.catch(error => res.status(500).send('Error revalidating'));
			return res.status(200).json({ revalidated: true });
		} else {
			return res
				.status(400)
				.send('No parameter was passed to the request body');
		}
	}
	// async PUT(req: IRevalidateApiRequest, res: NextApiResponse) {
	// 	console.log('PUT');
	// }
	// async PATCH(req: IRevalidateApiRequest, res: NextApiResponse) {
	// 	console.log('PATCH');
	// }
	// async DELETE(req: IRevalidateApiRequest, res: NextApiResponse) {
	// 	console.log('DELETE');
	// }
}

export const revalidateService = new RevalidateService();
