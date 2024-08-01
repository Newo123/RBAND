import cn from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { RootLayout } from '@/components/Layout/RootLayout';
import { Container } from '@/components/shared/Container';

import { usePagination } from '@/hooks/usePagination';

import { getVideoMedia } from '@/utils/getVideoMedia';

import classes from './Logotypes.module.scss';
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

const PageElement = ({ page }) => {
	const videoRef = useRef(null);
	console.log(page);

	return (
		<section
			key={page?.page_id}
			className={cn(classes.items, classes[`item-${page?.page_id}`])}
			id={`logo-${page?.page_id}`}
		>
			<Container
				variant='xl'
				className={classes.container}
			>
				<Link
					href={page?.href}
					className={classes.name}
				>
					<span
						dangerouslySetInnerHTML={{
							__html: page?.sort > 9 ? page?.sort : '0' + page?.sort
						}}
						className={classes.number}
					/>
					<h5
						dangerouslySetInnerHTML={{ __html: page?.name }}
						className={classes.main_name}
					/>
					<p
						dangerouslySetInnerHTML={{ __html: page?.meta_description }}
						className={classes.description}
					/>
				</Link>
				<Link
					href={page?.href}
					className={classes.img_box}
				>
					<Image
						src={page?.feed_image}
						alt={page?.name}
						width={1920}
						height={920}
					/>
					{page?.description_videos && page?.description_videos?.length > 0 && (
						<div className={classes.videoBackground}>
							<motion.video
								ref={videoRef}
								autoPlay
								loop
								preload='auto'
								muted
								playsInline
								// whileInView={}
							>
								{page?.description_videos?.map((item, index) => {
									const props = {
										src: item.href,
										type: `video/${item.href.split('.')[item.href.split('.').length - 1] !== 'mov' ? item.href.split('.')[item.href.split('.').length - 1] : 'mp4'}`,
										...(item.property['max_width'] && {
											media: `${getVideoMedia(item)}`
										})
									};
									return (
										<source
											key={index}
											{...props}
										/>
									);
								})}
							</motion.video>
						</div>
					)}
				</Link>
			</Container>
		</section>
	);
};

export default function Page({ projects }) {
	const router = useRouter();
	const { items } = usePagination(projects?.body?.main?.pages, 10);
	console.log(projects);

	return (
		<RootLayout
			footer={projects.body.footer}
			header={projects.body.header}
			head={projects.head}
		>
			<section className={classes.descriptor}>
				<Container
					variant='xl'
					className={classes.descriptor__container}
				>
					<h1
						className={cn('site-title-2', classes.descriptor__title)}
						dangerouslySetInnerHTML={{
							__html: projects?.body?.main?.descriptor?.title_page
						}}
					/>
					{projects?.body?.main?.descriptor?.navigation_categories && (
						<div className={classes.descriptor__nav}>
							{projects?.body?.main?.descriptor?.navigation_categories.map(
								item => (
									<Link
										href={item.href}
										key={item.category_id}
										className={cn(
											classes.descriptor__navItem,
											(router.defaultLocale === router.locale
												? router.asPath
												: `/${router.locale}${router.asPath}`) === item.href &&
												classes.descriptor__navItem_active
										)}
									>
										<span>{item.name}</span>
									</Link>
								)
							)}
						</div>
					)}
				</Container>
			</section>

			<div className={classes.logotypePortfolio}>
				{projects?.body?.main?.pages &&
					items.map(page => (
						<PageElement
							page={page}
							key={page?.page_id}
						/>
					))}
			</div>
		</RootLayout>
	);
}
