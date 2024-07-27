import { Container } from '../Container';

import { Person } from './Person';
import { PrinciplesContent } from './PrinciplesContent';
import classes from './styles.module.scss';

export function Principles({ principles }) {
	return (
		<section className={classes.principles}>
			<Container
				variant='xl'
				className={classes.principles__container}
			>
				<PrinciplesContent
					title={principles.title}
					items={principles.motivations_array}
				/>
				<Person {...principles.principles_person} />
			</Container>
		</section>
	);
}
