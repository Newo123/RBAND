import { Icon } from '@iconify/react';
import cn from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

import { headerBlack } from '@/constants/headerBlack.constants';

import { useScroll } from '@/hooks/useScroll';

import { Container } from '../Container';

import { HeaderNavItem } from './HeaderNavItem';
import { Submenu } from './Submenu';
import classes from './styles.module.scss';
import { ModalContext } from '@/contexts/Modal.context';

const transition = {
	duration: 1,
	ease: [0.76, 0, 0.24, 1]
};
export function Header({ header }) {
	const {
		menu: { row_1 }
	} = header;
	const [isFixed, setIsFixed] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isTranslate, setIsTranslate] = useState(true);
	const [isShow, setIsShow] = useState(false);
	const [isTransition, setIsTransition] = useState(false);
	const [isHover, setIsHover] = useState(false);
	const { scroll, setScroll } = useScroll();
	const pathname = usePathname();
	// { isOpen: true, id: '12' }
	const [selectedMenu, setSelectedMenu] = useState({ isOpen: false, id: '0' });

	const { open } = useContext(ModalContext);

	let currentScroll = 0;
	const handleScroll = e => {
		const window = e.currentTarget;
		const header = document.querySelector('header');

		if (currentScroll > window.scrollY) {
			setIsShow(true);
		} else {
			setIsShow(false);
		}
		setScroll(window.scrollY);
		if (header && window.scrollY > header.clientHeight) {
			setIsFixed(true);
		} else if (window.scrollY <= 1) {
			setIsFixed(false);
			setIsShow(false);
		}

		currentScroll = window.scrollY;
	};

	useEffect(() => {
		if (isFixed) {
			setTimeout(() => setIsTransition(true), 200);
		} else {
			setIsTransition(false);
		}
	}, [isFixed]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setIsLoaded(true);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			data-lenis-prevent-wheel
			className={cn(
				classes.header,
				isFixed ? classes.header_fixed : '',
				isShow ? classes.header_show : '',
				isTransition ? classes.header_transition : '',
				selectedMenu.isOpen || headerBlack.includes(pathname) || isFixed
					? classes.header_black
					: ''
			)}
			onTransitionEnd={() => setIsTranslate(false)}
			style={
				!isLoaded
					? { transform: 'translateY(-100%)', opacity: '0' }
					: isTranslate && scroll <= 0
						? { transition: 'all 0.5s 1.9s ease' }
						: {}
			}
		>
			<Container
				variant='xl'
				className={classes.header__container}
			>
				<div className={classes.header__left}>
					<Link
						href={header.home}
						className={classes.header__logo}
					>
						RBAND
					</Link>

					<nav className={classes.header__nav}>
						<ul className={classes.header__list}>
							{row_1.map((item, index) => (
								<HeaderNavItem
									selectedMenu={selectedMenu}
									setSelectedMenu={setSelectedMenu}
									item={item}
									key={index}
								/>
							))}
						</ul>
					</nav>
				</div>
				<div className={classes.header__right}>
					{/* <button
						className={classes.header__getLangs}
						onClick={() => open(<Localization country={localesCountry} />)}
					>
						RU
					</button>

					<button
						className={classes.header__getCity}
						onClick={() => open(<Localization regions={localesRegions} />)}
					>
						Екатеринбург
					</button> */}
					<button
						className={cn(
							classes.header__getProject,
							isHover && classes.header__getProject_hover
						)}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
						// onClick={() =>
						// 	open(
						// 		<Contacts
						// 			theme='dark'
						// 			contact={{ isAddress: false }}
						// 			callback={call}
						// 		/>
						// 	)
						// }
					>
						<span className={classes.header__getProjectHover}>Поехали!</span>
						<span className={classes.header__getProjectMain}>
							Начать проект
						</span>
					</button>
					<div className={classes.header__burger}>
						<Icon icon='clarity:menu-line' />
					</div>
				</div>
			</Container>
			<Submenu
				row_1={row_1}
				selectedMenu={selectedMenu}
				setSelectedMenu={setSelectedMenu}
			/>
		</header>
	);
}
