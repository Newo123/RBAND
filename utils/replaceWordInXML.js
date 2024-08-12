import xml2js from 'xml2js';

export function replaceWordInXML(sitemap, oldDomain, newDomain) {
	const parser = new xml2js.Parser();
	const builder = new xml2js.Builder();
	let newSitemapXml;
	parser.parseString(sitemap, (err, result) => {
		if (err) {
			throw err;
		}

		const urls = result.urlset.url;

		const replaceText = obj => {
			for (const key in obj) {
				if (typeof obj[key] === 'object') {
					replaceText(obj[key]);
				} else if (typeof obj[key] === 'string') {
					obj[key] = obj[key].replace(new RegExp(oldDomain, 'g'), newDomain);
					// obj[key] = obj[key].replace(
					// 	new RegExp(process.env.API_DOMAIN_SECURE, 'g'),
					// 	newDomain
					// );
				}
			}
		};

		replaceText(urls);

		newSitemapXml = builder.buildObject(result);
	});
	return newSitemapXml;
}
