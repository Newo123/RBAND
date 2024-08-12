import Link from 'next/link';

import { HeaderNavSubitemPreview } from './HeaderNavSubitemPreview';
import classes from './styles.module.scss';

export function SubmenuInner({
	items: children,
	previews,
	menuId,
	selectedMenu
}) {
	return (
		<div className={classes.submenu__content}>
			<div className={classes.submenu__contentNav}>
				<ul className={classes.submenu__contentNavList}>
					{children &&
						children?.map((child, index) => (
							<li
								key={index}
								className={classes.submenu__contentNavListItem}
							>
								<Link
									href={child.href}
									className={classes.submenu__contentNavListItemLink}
								>
									<span>{child.name}</span>
								</Link>
							</li>
						))}
				</ul>
				<p
					className={classes.submenu__contentNavText}
					dangerouslySetInnerHTML={{
						__html:
							'Наши проекты это: интуитивно понятный дизайн, изучение поведения и предпочтений ЦА,  бенчмаркетинг и технологичность.'
					}}
				/>
			</div>
			<div className={classes.submenu__contentPreviews}>
				<div
					className={classes.submenu__contentPreviewsLabel}
					dangerouslySetInnerHTML={{ __html: previews?.name }}
				/>
				<div className={classes.submenu__contentPreviewsGrid}>
					{previews?.children &&
						previews?.children?.map((item, i) => (
							<HeaderNavSubitemPreview
								item={item}
								key={i}
								isOpen={selectedMenu.isOpen}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
