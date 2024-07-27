import cn from 'clsx';

import { Container } from '@/components/shared/Container';

import classes from './ProjectsMap.module.scss';
import { ProjectsMapFrame } from './ProjectsMapFrame';

export function ProjectsMap({ text_about_map_text, text_about_map_title }) {
	return (
		<section className={classes.projectsMap}>
			<Container
				variant='xl'
				className={classes.projectsMap__container}
			>
				<h2 className={cn('site-title-2', classes.projectsMap__title)}>
					{text_about_map_title}
				</h2>
				<p className={classes.projectsMap__text}>{text_about_map_text}</p>
				<div className={classes.projectsMap__map}>
					<ProjectsMapFrame />
				</div>
			</Container>
		</section>
	);
}
