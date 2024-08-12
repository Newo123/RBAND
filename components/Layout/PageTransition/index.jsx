import { motion, useAnimationControls } from 'framer-motion';
import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';

import { Container } from '@/components/shared/Container';

import { Loader } from '../Loader';

import classes from './style.module.scss';
import { PageTransitionContext } from '@/contexts/PageTransition.context';

const anim = variants => {
	return {
		variants,
		initial: 'initial',
		animate: 'enter',
		exit: 'exit'
	};
};

export const PageTransition = memo(({ children, pageTitle = '' }) => {
	const [isLoader, setIsLoader] = useState(false);
	const router = useRouter();
	const controls = useAnimationControls();
	const controlsText = useAnimationControls();
	const [pageTitleT, setPageTitleT] = useState('RBAND');
	// const routeChangeStart = () => {
	// 	controls.start('exit');
	// 	setIsLoader(true);
	// };
	// useEffect(() => {
	// 	controls.start('enter');
	// 	setIsLoader(false);
	// }, [children]);

	// useEffect(() => {
	// 	router.events.on('routeChangeStart', routeChangeStart);
	// 	return () => {
	// 		router.events.off('routeChangeStart', routeChangeStart);
	// 	};
	// }, [router.events]);

	const translate = {
		initial: {
			top: '0'
		},
		enter: {
			top: '-100vh',
			transition: { duration: 0.75, delay: 0.75, ease: [0.76, 0, 0.24, 1] },
			transitionEnd: {
				top: '100vh'
			}
		},
		exit: {
			top: '0',
			transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
		}
	};
	const textAnim = {
		initial: {
			translateY: '100%',
			transition: { duration: 0.75, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
			opacity: 0
		},
		enter: {
			translateY: '0%',
			opacity: 1,
			transition: { duration: 0.75, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
			transitionEnd: {
				translateY: '-100%'
			}
		},
		exit: {
			translateY: '0%',
			opacity: 1,
			transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
		}
	};

	const pageIn = () => {
		controls.start('enter');
		controlsText.start('exit');
		setIsLoader(false);
	};
	const pageOut = el => {
		controls.start('exit');
		// controlsText.start('enter');

		if (children) {
			setPageTitleT(el?.dataset?.children);
			setIsLoader(true);
		}
		router.push(el?.href);
	};
	const valuePageTransitionProvider = {
		pageIn,
		pageOut
	};

	useEffect(() => {
		pageIn();
	}, [children]);

	return (
		<PageTransitionContext.Provider value={valuePageTransitionProvider}>
			<div
				className={classes.pageTransition}
				key={children}
			>
				{isLoader && <Loader />}

				<motion.div
					className={classes.pageTransition__slide}
					variants={translate}
					initial='initial'
					animate={controls}
				>
					<Container
						variant='xl'
						className='h-full flex items-center justify-center'
					>
						<motion.h2
							// variants={textAnim}
							// initial='initial'
							// animate={controlsText}
							variants={textAnim}
							initial={textAnim.initial}
							animate={controlsText}
							className='text-white text-[80px] font-black'
							// key={pageTitleT}
						>
							{pageTitleT}
						</motion.h2>
						{/* <h2 className='text-white text-[80px] font-black'>{pageTitleT}</h2> */}
					</Container>
				</motion.div>
				{children}
			</div>
		</PageTransitionContext.Provider>
	);
});
PageTransition.displayName = 'PageTransition';
