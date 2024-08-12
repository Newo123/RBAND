import { Icon } from '@iconify/react';
import cn from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Container } from '../../Container';

import { HeaderNavSubitemPreview } from './HeaderNavSubitemPreview';
import classes from './styles.module.scss';

export const HeaderNavSubItem = ({ item, handleOpen }) => {
	return (
		item.children &&
		item.children.length > 0 && (
			<div
				className={cn(classes.submenu, item.isOpen && classes.submenu_active)}
				// onClick={handleOpen}
			>
				<motion.div
					className={classes.submenu__container}
					onClick={e => e.stopPropagation()}
				>
					<div
						className={classes.submenu__close}
						// onClick={handleOpen}
					>
						<Icon icon='iconamoon:close-thin' />
					</div>
					<Container
						variant='xl'
						className={classes.submenu__wrapper}
					>
						<div className={classes.submenu__nav}>
							<ul className={classes.submenu__navList}>
								{item.children.map((child, index) => (
									<li
										key={index}
										className={classes.submenu__navListItem}
									>
										<Link
											href={child.href}
											dangerouslySetInnerHTML={{ __html: child.name }}
											className={classes.submenu__navListItemLink}
										/>
									</li>
								))}
							</ul>
							<p className={classes.submenu__navText}>
								Наши проекты это: интуитивно понятный дизайн, изучение поведения
								и предпочтений ЦА, бенчмаркетинг и технологичность.
							</p>
						</div>
						{item.previews && (
							<div className={classes.submenu__previews}>
								<div
									dangerouslySetInnerHTML={{ __html: item.previews.name }}
									className={classes.submenu__previewsTitle}
								/>
								{item.previews.children &&
									item.previews.children.length > 0 && (
										<div className={classes.submenu__previewsGrid}>
											{item.previews.children.map((child, index) => (
												<HeaderNavSubitemPreview
													child={child}
													isOpen={item.isOpen}
													key={index}
												/>
											))}
										</div>
									)}
							</div>
						)}
					</Container>
				</motion.div>
			</div>
		)
	);
};
