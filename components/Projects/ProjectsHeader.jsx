import cn from 'clsx';

import Heading from '../ui/Heading';
import { Reference } from '../ui/Reference';

import classes from './styles.module.scss';

export function ProjectsHeader({ projects, title, paginationRef, more }) {
	return (
		<div className={classes.ourProjects__header}>
			{title && (
				<Heading
					tag='h4'
					className={cn('site-title-2', classes.ourProjects__title)}
				>
					{title}
				</Heading>
			)}

			{Array.isArray(projects) && projects ? (
				<div className={classes.ourProjects__containerTabs}>
					<div
						className={classes.ourProjects__tabs}
						ref={paginationRef}
						data-slider-dots
					/>
				</div>
			) : (
				more && (
					<Reference
						href={more.href}
						className={classes.ourProjects__more}
					>
						{more.text}
					</Reference>
				)
			)}
		</div>
	);
}
