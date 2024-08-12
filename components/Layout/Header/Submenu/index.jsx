import { Icon } from '@iconify/react';
import cn from 'clsx';

import { Container } from '@/components/shared/Container';

import { ServicesInner } from './ServicesInner';
import { SubmenuInner } from './SubmenuInner';
import classes from './styles.module.scss';

const technologies = [
	{
		href: '#',
		icon: '/tech-icons/docker.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/gitlab.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/react.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/laravel.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/php.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/strapi.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/opencart.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/wordpress.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/nextjs.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/figma.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/adobe.svg',
		target: '1'
	},
	{
		href: '#',
		icon: '/tech-icons/mui.svg',
		target: '1'
	}
];

export function Submenu({ row_1, selectedMenu, setSelectedMenu }) {
	const handleClick = () => {
		setSelectedMenu(prev => (prev.isOpen = false));
	};
	return (
		<div className={classes.submenu}>
			<div
				className={classes.submenu__shadow}
				onClick={handleClick}
			/>
			{row_1 &&
				row_1?.map(item => {
					if (!item?.children.length > 0) return;

					return (
						<div
							key={item.menu_id}
							className={cn(
								classes.submenu__wrapper,
								selectedMenu.isOpen &&
									selectedMenu.id === item.menu_id &&
									classes.submenu__wrapper_active
							)}
						>
							<Container
								variant='xl'
								className={classes.submenu__container}
							>
								{item?.services ? (
									<ServicesInner
										items={item?.children}
										menuId={item?.menu_id}
										selectedMenu={selectedMenu}
										technologies={technologies}
									/>
								) : (
									<SubmenuInner
										menuId={item?.menu_id}
										selectedMenu={selectedMenu}
										items={item?.children}
										previews={item?.previews}
									/>
								)}
							</Container>
							<div
								className={classes.submenu__close}
								onClick={handleClick}
							>
								<Icon icon='iconamoon:close-thin' />
							</div>
						</div>
					);
				})}
		</div>
	);
}
