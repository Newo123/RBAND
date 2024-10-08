import { RootLayout } from '@/components/Layout/RootLayout';
import { PageWrapper } from '@/components/Layout/pageWrapper';
import { Container } from '@/components/shared/Container';
import { HeroInner } from '@/components/shared/HeroInner';
import { Typography } from '@/components/shared/Typography';

import classes from './inner.module.scss';
import { dataService } from '@/services/data.service';

export async function getServerSideProps({ req, res, locale, resolvedUrl }) {
	const props = await dataService.getAllData(req, res, locale, resolvedUrl);

	if (!props.body.main) {
		return {
			notFound: true
		};
	}
	const domain = `${req?.headers['x-forwarded-proto']}://${req?.headers['x-forwarded-host']}`;

	return { props: { blog: props, domain } };
}

export default function Page({ blog, domain }) {
	return (
		<RootLayout
			footer={blog.body.footer}
			head={blog.head}
			header={blog.body.header}
			domain={domain}
		>
			<HeroInner
				title={blog.body.main.descriptor?.title_page}
				text={blog.body.main.descriptor?.second_description}
				images={blog.body.main.descriptor?.description_images}
				backLink={blog.body.main.descriptor?.back_link}
			/>
			<PageWrapper>
				<section className={classes.section}>
					<Container variant='xl'>
						{blog.body.main.page?.content.length > 0 &&
							blog.body.main.page?.content.map((content, index) => (
								<Typography
									key={index}
									position='center'
								>
									{content?.content}
								</Typography>
							))}
					</Container>
				</section>
			</PageWrapper>
		</RootLayout>
	);
}
