import cn from 'clsx';

import { RootLayout } from '@/components/Layout/RootLayout';
import { PageWrapper } from '@/components/Layout/pageWrapper';
import { Review } from '@/components/Review';
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

	return { props: { project: props, domain } };
}

export default function Page({ project, domain }) {
	console.log(project);
	return (
		<RootLayout
			footer={project.body?.footer}
			header={project.body?.header}
			head={project?.head}
			domain={domain}
		>
			<HeroInner
				title={project.body.main.descriptor?.title_page}
				text={project.body.main.descriptor?.second_description}
				images={project.body.main.descriptor?.description_images}
				backLink={project.body.main.descriptor?.back_link}
			/>
			<PageWrapper>
				<div className='content-projects'>
					<section
						className={cn(
							classes.section,
							'project',
							`project_id-${project?.body?.main?.page?.page_id}`,
							'project-inner'
						)}
					>
						<Container variant='xl'>
							{project.body.main.page.content &&
								project.body.main.page.content.length > 0 &&
								project.body.main.page.content.map((item, index) => (
									<Typography
										position='center'
										key={index}
									>
										{item.content}
									</Typography>
								))}
						</Container>
					</section>
				</div>
				<Review
					{...project.body.main.review}
					{...project.body.main.form}
				/>
			</PageWrapper>
		</RootLayout>
	);
}
