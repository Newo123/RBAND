import cn from 'clsx';

import { Container } from '../shared/Container';
import Heading from '../ui/Heading';
import { Reference } from '../ui/Reference';

import classes from './Useful.module.scss';
import { UsefulSlider } from './UsefulSlider';

export function Useful({ useful, staticContent }) {
	return (
		useful.children.length > 0 && (
			<section className={classes.useful}>
				<Container
					variant='xl'
					className={classes.useful__container}
				>
					<div className={classes.useful__header}>
						<Heading
							tag='h2'
							className={cn(classes.useful__title, 'site-title-2')}
						>
							{useful.title}
						</Heading>
						<Reference
							href={useful.href}
							className={classes.useful__more}
						>
							{staticContent?.linkText}
						</Reference>
					</div>
					<UsefulSlider {...useful.children} />
				</Container>
			</section>
		)
	);
}
