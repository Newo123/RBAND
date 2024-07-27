import { RootLayout } from '@/components/Layout/RootLayout';
import { PageWrapper } from '@/components/Layout/pageWrapper';
import { Projects } from '@/components/Projects';
import { Hero } from '@/components/shared/Hero';

import classes from './styles.module.scss';
import { getAll } from '@/services/data.service';

// export const getStaticProps = async ctx => {
// 	let props;
// 	if (ctx.locale === ctx.defaultLocale) {
// 		props = await getDataService(
// 			`${staticPathsService.projects}/${ctx.params.slug}`
// 		);
// 	} else {
// 		props = await getDataService(
// 			`/${ctx.locale}${staticPathsService.projects}/${ctx.params.slug}`
// 		);
// 	}

// 	if (!props) {
// 		return {
// 			notFound: true
// 		};
// 	}

// 	const projectItems = await props.body.main.pages.map(async (item, index) => {
// 		if (!item.title_image_min) {
// 			return item;
// 		}
// 		const buffer = await fetch(API_DOMAIN + item.title_image_min).then(
// 			async res => Buffer.from(await res.arrayBuffer())
// 		);

// 		if (!buffer) {
// 			return item;
// 		}
// 		const { base64 } = await getPlaiceholder(buffer);
// 		item.placeholder = await base64;
// 		return item;
// 	});
// 	props.body.main.pages = await Promise.all(projectItems).then(responses => {
// 		return responses;
// 	});

// 	return { props: { projects: props } };
// };

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
	// 	// const buffer = await fetch(
	// 	// 	API_DOMAIN + props.body.main.descriptor.image
	// 	// ).then(async res => Buffer.from(await res.arrayBuffer()));
	// 	const buffer = await fetch(API_DOMAIN + item.title_image_min)
	// 		.then(async res => Buffer.from(await res.arrayBuffer()))
	// 		.catch(error => console.log(error));

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

	return { props: { projects: props } };
};

export default function Page({ projects }) {
	const hero = {
		title: projects.body.main.descriptor.title_page,
		description: projects.body.main.descriptor.second_description,
		inners: projects.body.main.descriptor.navigation_categories
	};

	return (
		<RootLayout
			footer={projects.body.footer}
			header={projects.body.header}
			head={projects.head}
		>
			<Hero {...hero} />
			<PageWrapper className={classes.projectsPageWrapper}>
				<Projects projects={projects.body.main.pages} />
			</PageWrapper>
		</RootLayout>
	);
}
