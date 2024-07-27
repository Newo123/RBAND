import { Blog } from '@/components/Blog';
import { RootLayout } from '@/components/Layout/RootLayout';
import { PageWrapper } from '@/components/Layout/pageWrapper';
import { Hero } from '@/components/shared/Hero';

import { getAll } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await getAll(req, res, locale, resolvedUrl);

	if (!props.body.main) {
		return {
			notFound: true
		};
	}

	// const projectItems = await props.body.main.pages.map(async (item, index) => {
	// 	if (!item.title_image) {
	// 		return item;
	// 	}
	// 	// const data = await sharp(API_DOMAIN + item.title_image)
	// 	// 	.toFormat('png')
	// 	// 	.toBuffer();
	// 	// console.log(data);
	// 	const buffer = await fetch(API_DOMAIN + item.title_image).then(async res =>
	// 		Buffer.from(await res.arrayBuffer())
	// 	);

	// 	if (!buffer) {
	// 		return item;
	// 	}
	// 	const { base64 } = await getPlaiceholder(buffer);
	// 	item.placeholder = await base64;
	// 	return item;
	// });
	// props.body.main.pages = await Promise.all(projectItems).then(responses => {
	// 	return responses;
	// });
	return {
		props: {
			blogs: props,
			localization: (await import(`../../../locales/${locale}.json`)).default
		}
	};
};

export default function Page({ blogs }) {
	const hero = {
		title: blogs.body.main.descriptor.title_page,
		description: blogs.body.main.descriptor.second_description,
		inners: blogs.body.main.descriptor.navigation_categories
	};

	return (
		<RootLayout
			footer={blogs.body.footer}
			head={blogs.head}
			header={blogs.body.header}
		>
			<Hero {...hero} />
			<PageWrapper>
				<Blog blog={blogs.body.main.pages} />
			</PageWrapper>
		</RootLayout>
	);
}
