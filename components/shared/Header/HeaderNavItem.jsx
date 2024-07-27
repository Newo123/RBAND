import cn from 'clsx';
import Link from 'next/link';

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
		<li className={classes.header__listItem}>
			{item.children.length > 0 ? (
				<span onClick={handleClick}>{item.title}</span>
			) : (
				<Link
					href={item.href}
					className={cn(
						classes.header__listItemLink,
						item.active && classes.header__listItemLink_active
					)}
				>
					{item.title}
				</Link>
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
