import { Icon } from '@iconify/react';
import cn from 'clsx';

import { TransitionLink } from '@/components/shared/TransitionLink';

import classes from './styles.module.scss';

export function HeaderNavItem({ item, selectedMenu, setSelectedMenu }) {
	const handleClick = () => {
		if (selectedMenu.isOpen && selectedMenu.id === item.menu_id) {
			setSelectedMenu({
				isOpen: false,
				id: item.menu_id
			});
		} else {
			setSelectedMenu({
				isOpen: true,
				id: item.menu_id
			});
		}
	};
	return (
		<li
			className={cn(
				classes.header__listItem,
				selectedMenu.isOpen &&
					selectedMenu.id === item.menu_id &&
					classes.header__listItem_active
			)}
		>
			{item.children.length > 0 ? (
				<>
					<span
						onClick={handleClick}
						className={cn(
							classes.header__listItemLink,
							item.active && classes.header__listItemLink_active,
							selectedMenu.isOpen &&
								selectedMenu.id === item.menu_id &&
								classes.header__listItemLink_active
						)}
					>
						{item.title}
					</span>
					<Icon icon='mingcute:down-line' />
				</>
			) : (
				<TransitionLink
					href={item.href}
					className={cn(
						classes.header__listItemLink,
						item.active && classes.header__listItemLink_active,
						selectedMenu.isOpen &&
							selectedMenu.id === item.menu_id &&
							classes.header__listItemLink_active
					)}
					dataChildren={item.title}
				>
					{item.title}
				</TransitionLink>
			)}
			{/* {item.services ? (
				<HeaderNavSubItemServices
					item={item}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			) : (
				<HeaderNavSubItem item={item} />
			)} */}
		</li>
	);
}
