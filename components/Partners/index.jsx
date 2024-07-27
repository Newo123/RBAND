import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

import { useScroll } from '@/hooks/useScroll';

import { Container } from '../shared/Container';

import { PartnersItem } from './PartnersItem';
import classes from './styles.module.scss';

export function Partners({ partners }) {
	const partnersRef = useRef(null);
	const { scroll } = useScroll();
	const [isAnimate, setIsAnimate] = useState(false);

	useGSAP(
		() => {
			if (scroll <= 0 && !isAnimate) {
				gsap.to(partnersRef.current, {
					translateY: 0,
					opacity: 1,
					delay: 1.9,
					duration: 0.5,
					onComplete: () => {
						setIsAnimate(true);
					}
				});
			}
		},
		{ scope: partnersRef }
	);

	return (
		<div className={classes.partners}>
			<div
				className={classes.partners__trigger}
				ref={partnersRef}
				style={
					!isAnimate && scroll <= 0
						? {
								transform: 'translateY(100%)',
								opacity: 0
							}
						: { opacity: 1 }
				}
			>
				<Container
					variant='xl'
					className={classes.partners__container}
				>
					{partners?.map(partner => (
						<PartnersItem
							key={partner.image}
							href={partner.href}
							image={partner.image}
						/>
					))}
				</Container>
			</div>
		</div>
	);
}
