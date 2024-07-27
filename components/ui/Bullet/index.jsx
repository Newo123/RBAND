import cn from 'clsx';
import { useEffect, useRef, useState } from 'react';

// import ReactHtmlParser from 'react-html-parser';
import { useResize } from '@/hooks/useResize';

import classes from './styles.module.scss';

export function Bullet({ className, children, title, ...rest }) {
	const bulletRef = useRef(null);
	const titleRef = useRef(null);
	const childRef = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const resize = useResize();
	const [maxHeight, setMaxHeight] = useState('');

	const getMaxHeight = () => {
		if (resize.isScreenXS) {
			setMaxHeight('19.813rem');
		} else if (resize.isScreenSm || resize.isScreenMd) {
			setMaxHeight('11.25rem');
		} else if (resize.isScreenXl || resize.isScreenXxl) {
			setMaxHeight('15rem');
		}
	};

	useEffect(() => {
		getMaxHeight();
	}, [resize]);

	useEffect(() => {
		getMaxHeight();
	}, []);

	// useGSAP(
	// 	() => {
	// 		ScrollTrigger.create({
	// 			trigger: bulletRef.current,
	// 			start: 'top 75%',
	// 			end: 'bottom 25%',
	// 			onEnter: self => {
	// 				gsap
	// 					.timeline()
	// 					.to(bulletRef.current, {
	// 						width: 'calc(100% - 1.5rem)',
	// 						borderRadius: '1.875rem',
	// 						maxHeight: maxHeight
	// 					})
	// 					.to(titleRef.current, {
	// 						opacity: 0
	// 					})
	// 					.to(childRef.current, {
	// 						opacity: 1,
	// 						delay: 0.3
	// 					})
	// 			},
	// 			onLeaveBack: self => {
	// 				gsap
	// 					.timeline()
	// 					.to(childRef.current, {
	// 						opacity: 0
	// 					})
	// 					.to(bulletRef.current, {
	// 						width: '',
	// 						borderRadius: '',
	// 						maxHeight: ''
	// 					})

	// 					.to(titleRef.current, {
	// 						opacity: 1
	// 					})
	// 			}
	// 		})
	// 	},
	// 	{
	// 		scope: bulletRef,
	// 		dependencies: [isActive, setIsActive, bulletRef, titleRef, maxHeight]
	// 	}
	// )

	return (
		<div
			className={cn(
				classes.bullet,
				className,
				isActive && classes.bullet_active
			)}
			ref={bulletRef}
			{...rest}
		>
			<div
				ref={childRef}
				style={{ opacity: 0, width: '100%', height: '100%' }}
			>
				{children}
			</div>
			{title && (
				<h4
					ref={titleRef}
					className={cn(classes.bullet__title)}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			)}
		</div>
	);
}
