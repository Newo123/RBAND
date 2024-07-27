import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';

import classes from './styles.module.scss';

export function ReputationSliderLink({ links, localization, ...rest }) {
	const linkRef = useRef(null);

	useGSAP(() => {
		gsap.to(linkRef.current, {
			scrollTrigger: {
				trigger: '#reviews-slider'
			},
			opacity: 1,
			translateY: 0,
			delay: 0.6
		});
	});
	return (
		<div
			className={classes.reputation__sliderSlideLinks}
			{...rest}
			ref={linkRef}
			style={{ opacity: 0, transform: 'translateY(100%)' }}
		>
			{localization.services.reputations.lookText}{' '}
			{links.map((l, i) => (
				<Link
					href={l.href}
					key={i}
					target={l.target}
				>
					{l.text}
				</Link>
			))}
		</div>
	);
}
