import cn from 'clsx';

import Heading from '@/components/ui/Heading';

import { Container } from '../Container';

import { FaqItem } from './FaqItem';
import classes from './styles.module.scss';

export function Faq({ title, faq_array }) {
	return (
		<section className={classes.faq}>
			<Container
				variant='xl'
				className={classes.faq__container}
			>
				<Heading
					tag='h5'
					className={cn('site-title-2', classes.faq__title)}
				>
					{title}
				</Heading>
				{faq_array.length > 0 && (
					<div className={classes.faq__list}>
						{faq_array.map((item, index) => (
							<FaqItem
								title={item.name}
								typography={item.content}
								key={index}
							/>
						))}
					</div>
				)}
			</Container>
		</section>
	);
}
