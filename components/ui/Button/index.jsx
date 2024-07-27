import { useGSAP } from '@gsap/react';
import cn from 'clsx';
import { gsap } from 'gsap';
import { Observer } from 'gsap/dist/Observer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import classes from './Button.module.scss';

gsap.registerPlugin(Observer);

export function Button({ className, children, type = 'button', href, target }) {
	const buttonRef = useRef();
	const followerRef = useRef();

	const router = useRouter();

	useGSAP(
		() => {
			Observer.create({
				target: buttonRef.current,
				type: 'pointer',
				onMove: self => {
					gsap.to(followerRef.current, {
						duration: 0,
						delay: 0,
						translateX:
							// @ts-ignore
							(self.event.layerX / buttonRef.current.clientWidth) * 100 + '%',
						translateY:
							// @ts-ignore
							(self.event.layerY / buttonRef.current.clientHeight) * 100 + '%'
					});
				},
				onHover: self => {
					gsap.to(followerRef.current, {
						duration: 0.3,
						delay: 0,
						scale: 1
					});
				},
				onHoverEnd: self => {
					gsap.to(followerRef.current, {
						duration: 0.3,
						delay: 0,
						scale: 0
					});
				}
			});
		},
		{ scope: buttonRef, dependencies: [] }
	);
	return type === 'button' ? (
		<button
			className={cn(classes.button, className)}
			ref={buttonRef}
		>
			<div
				className={classes.button__follower}
				ref={followerRef}
			></div>
			{children}
		</button>
	) : (
		<Link
			className={cn(classes.button, className)}
			ref={buttonRef}
			href={href || ''}
			target={target || ''}
			locale={router.locale}
		>
			<div
				className={classes.button__follower}
				ref={followerRef}
			></div>
			{children}
		</Link>
	);
}
