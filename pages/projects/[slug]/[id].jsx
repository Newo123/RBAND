import { RootLayout } from '@/components/Layout/RootLayout';
import { PageWrapper } from '@/components/Layout/pageWrapper';
import { Review } from '@/components/Review';
import { Container } from '@/components/shared/Container';
import { HeroInner } from '@/components/shared/HeroInner';
import { Typography } from '@/components/shared/Typography';

import classes from './inner.module.scss';
import { getAll } from '@/services/data.service';

export async function getServerSideProps({ req, res, locale, resolvedUrl }) {
	const props = await getAll(req, res, locale, resolvedUrl);

	if (!props.body.main) {
		return {
			notFound: true
		};
	}

	return { props: { project: props } };
}

export default function Page({ project }) {
	return (
		<RootLayout
			footer={project.body?.footer}
			header={project.body?.header}
			head={project?.head}
		>
			<HeroInner
				title={project.body.main.descriptor?.title_page}
				text={project.body.main.descriptor?.second_description}
				image={project.body.main.descriptor?.image}
				backLink={project.body.main.descriptor?.back_link}
			/>
			<PageWrapper>
				<section className={classes.section}>
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
				<Review
					{...project.body.main.review}
					{...project.body.main.form}
				/>
			</PageWrapper>
		</RootLayout>
	);
}
