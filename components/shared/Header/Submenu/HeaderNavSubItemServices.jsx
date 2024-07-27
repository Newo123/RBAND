import Link from 'next/link';

import { Container } from '../../Container';

import classes from './styles.module.scss';

export const HeaderNavSubItemServices = ({ item, isOpen, setIsOpen }) => {
	return (
		item.services &&
		item.services.length > 0 && (
			<div
				className={classes}
				style={{ display: 'none' }}
			>
				<Container variant='xl'>
					<div>
						<ul>
							{item.services.map((child, index) => (
								<li key={index}>
									<Link
										href={child.href}
										dangerouslySetInnerHTML={{ __html: child.name }}
									/>
								</li>
							))}
						</ul>
						<p>
							Наши проекты это: интуитивно понятный дизайн, изучение поведения и
							предпочтений ЦА, бенчмаркетинг и технологичность.
						</p>
					</div>
					<div></div>
				</Container>
			</div>
		)
	);
};
