import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

import classes from '../styles.module.scss';

import { PersonAbout } from './PersonAbout';
import { PersonStatistics } from './PersonStatistics';

export function Person({ stats, person, text, image }) {
	const personRef = useRef(null);
	useGSAP(() => {
		gsap.to(personRef.current, {
			scrollTrigger: {
				trigger: personRef.current
			},
			opacity: 1,
			delay: 0.3
		});
	});
	return (
		<div
			className={classes.principles__person}
			ref={personRef}
			style={{ opacity: 0 }}
		>
			<div className={classes.principles__personImg}>
				<Image
					src={image}
					alt='victoria'
					fill
					sizes='100vw'
				/>
			</div>
			<PersonStatistics statistics={stats} />
			<PersonAbout
				aboutName={person}
				aboutText={text}
				educations={stats}
			/>
		</div>
	);
}
