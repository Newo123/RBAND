import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify/react';
import cn from 'clsx';
import gsap from 'gsap/all';
import { useRef } from 'react';

import classes from './styles.module.scss';

const Modal = ({ className, children, isOpen, setIsOpen, ...rest }) => {
	const modalRef = useRef(null);
	const modalContentRef = useRef(null);
	const shadowRef = useRef(null);
	const shadowSmallRef = useRef(null);

	useGSAP(
		() => {
			const timeline = gsap.timeline();
			if (isOpen) {
				timeline
					.to(shadowSmallRef.current, {
						translateY: '-100%',
						duration: 0.4,
						onStart: () => {
							document.body.style.overflowY = 'hidden';
						}
					})
					.to(modalRef.current, {
						maxHeight: '100%',
						duration: 0.3,
						delay: -0.7
					})
					.to(shadowRef.current, {
						translateY: '-100%',
						duration: 0.3,
						delay: 0.6
					})
					.to(modalContentRef.current, {
						opacity: 1,
						overflowY: 'auto'
					});
			} else if (!isOpen) {
				timeline
					.to(shadowRef.current, {
						translateY: 0,
						duration: 0.3
					})
					.to(modalContentRef.current, {
						opacity: 0,
						overflowY: 'hidden'
					})
					.to(modalRef.current, {
						maxHeight: 0,
						delay: -0.5,
						duration: 0.2
					})
					.to(shadowSmallRef.current, {
						translateY: 0,
						duration: 0.4,
						onComplete: () => {
							document.body.style.overflowY = 'scroll';
						}
					});
			}
		},
		{ scope: modalRef, dependencies: [isOpen] }
	);

	return (
		<div
			className={cn(classes.modal, className)}
			ref={modalRef}
			{...rest}
			data-lenis-prevent
		>
			<div
				className={classes.modal__shadow}
				ref={shadowRef}
			></div>
			<div
				className={cn(classes.modal__shadow, classes.modal__shadow_small)}
				ref={shadowSmallRef}
			></div>
			<button
				className={classes.modal__close}
				onClick={() => setIsOpen(false)}
			>
				<Icon icon='iconamoon:close-thin' />
			</button>
			<div
				style={{ opacity: 0 }}
				className={classes.modal__wrapper}
				ref={modalContentRef}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
