import cn from 'clsx';

import { Container } from '@/components/shared/Container';
import { TextWrap } from '@/components/shared/TextWrap';

import classes from './Motivations.module.scss';
import { MotivationsItem } from './MotivationsItem';

export function Motivations({ title, titleSvg, motivation_array }) {
	return (
		<section className={cn(classes.motivations, classes.motivations_about)}>
			<TextWrap
				images={titleSvg}
				textImages={title}
				variant='reverse'
				className={classes.motivations__textWrap}
			/>
			<Container
				variant='xl'
				className={classes.motivations__container}
			>
				{motivation_array &&
					motivation_array.length > 0 &&
					motivation_array.map((motivation, index) => (
						<MotivationsItem
							key={index}
							{...motivation}
						/>
					))}
			</Container>
		</section>
	);
}
