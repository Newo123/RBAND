import { replaceWordInXML } from '@/utils/replaceWordInXML';

import { dataService } from '@/services/data.service';

export default function Sitemap({ sitemap }) {
	return null;
}

export async function getServerSideProps({ req, res }) {
	const domain = `${req?.headers['x-forwarded-proto']}://${req?.headers['x-forwarded-host']}`;
	const sitemap = replaceWordInXML(
		await dataService.getSitemap(req, res),
		process.env.API_DOMAIN,
		domain
	);

	res.setHeader('Content-Type', 'application/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {
			sitemap
		}
	};
}
