import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../../Container';

import { height } from './anim';
import classes from './styles.module.scss';

export function Submenu({ row_1, selectedMenu, setSelectedMenu }) {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				variants={height}
				initial='initial'
				animate={selectedMenu.isOpen ? 'enter' : 'exit'}
				exit='exit'
				className={classes.submenu}
			>
				<div className={classes.submenu__wrapper}>
					<Container
						variant='xl'
						className={classes.submenu__container}
					>
						{row_1?.map(item => {
							if (!item.children.length > 0) {
								return;
							}

							if (item.services) {
								return (
									<div key={item.menu_id}>
										{item.services.map(service => (
											<div key={service.category_id}></div>
										))}
									</div>
								);
							}

							return (
								selectedMenu.isOpen &&
								selectedMenu.id === item.menu_id && (
									<div
										key={item.menu_id}
										className={cn(
											classes.submenu__item
											// selectedMenu.isOpen &&
											// 	selectedMenu.id === item.menu_id &&
											// 	classes.submenu__item_active
										)}
									>
										<div className={classes.submenu__itemMenu}>
											<ul className={classes.submenu__itemMenuList}>
												{item.children.length > 0 &&
													item.children.map(child => (
														<li
															key={child.category_id}
															className={classes.submenu__itemMenuListItem}
														>
															<Link
																href={child.href}
																className={
																	classes.submenu__itemMenuListItemLink
																}
															>
																{child.name}
															</Link>
														</li>
													))}
											</ul>
											<div className={classes.submenu__itemMenuText}>
												Наши проекты это: интуитивно понятный дизайн, изучение
												поведения и предпочтений ЦА, бенчмаркетинг и
												технологичность.
											</div>
										</div>
										<div className={classes.submenu__itemPreview}>
											<div className={classes.submenu__itemPreviewLabel}>
												{item.previews.name}
											</div>
											<div className={classes.submenu__itemPreviewGrid}>
												{item.previews.children.length > 0 &&
													item.previews.children.map(preview => (
														<Link
															href={preview.href}
															target={preview?.target && '_blank'}
															key={preview.page_id}
															className={classes.submenu__itemPreviewGridItem}
														>
															<div
																className={
																	classes.submenu__itemPreviewGridItemPicture
																}
															>
																{preview.thumb && (
																	<Image
																		src={preview.thumb}
																		alt={preview.name}
																		fill
																		sizes='100vw'
																	/>
																)}
																{preview.video && (
																	<video
																		// ref={videoRef}
																		loop
																		autoPlay
																		preload='auto'
																		muted={true}
																		playsInline
																		controls={false}
																		// poster={preview.feed_image}
																	>
																		<source
																			src={preview.video}
																			type='video/mp4'
																		/>
																	</video>
																)}
															</div>
															<h6
																className={
																	classes.submenu__itemPreviewGridItemTitle
																}
															>
																{preview.name}
															</h6>
														</Link>
													))}
											</div>
										</div>
									</div>
								)
							);
						})}
					</Container>
				</div>

				<div className={classes.submenu__shadow}></div>
			</motion.div>
		</AnimatePresence>
	);
}
