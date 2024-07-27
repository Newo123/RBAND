import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { createElement, useRef } from 'react';

const Heading = ({ tag, children, ...rest }) => {
	const headingRef = useRef(null);
	const Tag = props =>
		createElement(tag, { ref: headingRef, ...props }, children);

	useGSAP(
		() => {
			gsap.to(headingRef.current, {
				scrollTrigger: {
					trigger: headingRef.current
				},
				translateY: 0,
				opacity: 1,
				delay: 0.3
			});
		},
		{ scope: headingRef }
	);

	return (
		<Tag
			{...rest}
			style={{ transform: 'translateY(100%)', opacity: '0' }}
		>
			{children}
		</Tag>
	);
};

export default Heading;
