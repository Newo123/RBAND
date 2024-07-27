import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Container } from '../shared/Container';

import { AdvantagesImages } from './AdvantagesImages';
import { AdvantagesItem } from './AdvantagesItem';
import classes from './styles.module.scss';

export function Advantages({ advantages: advantagesProp }) {
	const [advantages, setAdvantages] = useState([]);
	const [isActive, setIsActive] = useState('');

	const pathname = usePathname();
	const [isHome, setIsHome] = useState(false);

	useEffect(() => {
		if (pathname === '/') {
			setIsHome(true);
		}
		setAdvantages(advantagesProp);
	}, []);

	useEffect(() => {
		setAdvantages(prev => {
			const newAdvantages = prev.map((advantage, index) => {
				if (index === isActive) {
					advantage.isActive = true;
				} else {
					advantage.isActive = false;
				}
				return advantage;
			});
			return newAdvantages;
		});
	}, [isActive]);

	return (
		<section className={classes.advantages}>
			<Container
				variant='xl'
				className={classes.advantages__container}
			>
				<AdvantagesImages
					advantages={advantages}
					setIsActive={setIsActive}
					isHome={isHome}
				/>
				<div className={classes.advantages__list}>
					{advantages.map((advantage, index) => (
						<AdvantagesItem
							id={index}
							key={index}
							advantage={advantage}
							setIsActive={setIsActive}
							isHome={isHome}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
