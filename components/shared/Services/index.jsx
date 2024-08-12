import cn from 'clsx';

import Heading from '@/components/ui/Heading';

import { Container } from '../Container';

import { ServicesItem } from './ServicesItem';
import classes from './styles.module.scss';

export default function Services({ offer, localization, callback }) {
	return (
		<section className={classes.services}>
			<Container
				variant='xl'
				className={classes.services__container}
			>
				{offer?.title && (
					<Heading
						tag='h2'
						className={cn('site-title-2', classes.services__title)}
					>
						{offer?.title}
					</Heading>
				)}

				<Heading
					tag='p'
					className={classes.services__text}
				>
					{offer?.description}
				</Heading>

				{offer?.offers_array.length > 0 && (
					<div className={classes.services__list}>
						{offer?.offers_array.map((service, index) => (
							<ServicesItem
								key={index}
								{...service}
								{...localization.services?.services}
								callback={callback}
							/>
						))}
					</div>
				)}
			</Container>
		</section>
	);
}
