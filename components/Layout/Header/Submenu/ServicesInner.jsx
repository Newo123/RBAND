import Image from 'next/image';
import Link from 'next/link';

import classes from './styles.module.scss';

export function ServicesInner({
	items: children,
	technologies,
	menuId,
	selectedMenu
}) {
	return (
		<div className={classes.submenu__services}>
			<div className={classes.submenu__servicesMenu}>
				{children &&
					children?.map(child => (
						<div
							key={child?.category_id}
							className={classes.submenu__servicesContent}
						>
							<Link
								href={child?.href}
								dangerouslySetInnerHTML={{ __html: child?.name }}
								className={classes.submenu__servicesContentTitle}
							/>
							<ul className={classes.submenu__servicesContentList}>
								{child?.children &&
									child?.children.map(item => (
										<li
											key={item?.page_id}
											className={classes.submenu__servicesContentListItem}
										>
											<span
												className={
													classes.submenu__servicesContentListItemArrows
												}
											>
												<span
													className={
														classes.submenu__servicesContentListItemArrowsBlack
													}
												>
													<svg
														width='11'
														height='10'
														viewBox='0 0 11 10'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M2.6357 7.39614C2.44044 7.5914 2.44044 7.90799 2.6357 8.10325C2.83097 8.29851 3.14755 8.29851 3.34281 8.10325L2.6357 7.39614ZM8.51514 2.72382C8.51514 2.44767 8.29128 2.22382 8.01514 2.22382L3.51514 2.22382C3.23899 2.22382 3.01514 2.44767 3.01514 2.72382C3.01514 2.99996 3.23899 3.22382 3.51514 3.22382L7.51514 3.22382L7.51514 7.22382C7.51514 7.49996 7.73899 7.72382 8.01514 7.72382C8.29128 7.72382 8.51514 7.49996 8.51514 7.22382L8.51514 2.72382ZM3.34281 8.10325L8.36869 3.07737L7.66158 2.37026L2.6357 7.39614L3.34281 8.10325Z'
															fill='black'
														/>
													</svg>
												</span>
												<span
													className={
														classes.submenu__servicesContentListItemArrowsRed
													}
												>
													<svg
														width='11'
														height='10'
														viewBox='0 0 11 10'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M2.6357 7.39614C2.44044 7.5914 2.44044 7.90799 2.6357 8.10325C2.83097 8.29851 3.14755 8.29851 3.34281 8.10325L2.6357 7.39614ZM8.51514 2.72382C8.51514 2.44767 8.29128 2.22382 8.01514 2.22382L3.51514 2.22382C3.23899 2.22382 3.01514 2.44767 3.01514 2.72382C3.01514 2.99996 3.23899 3.22382 3.51514 3.22382L7.51514 3.22382L7.51514 7.22382C7.51514 7.49996 7.73899 7.72382 8.01514 7.72382C8.29128 7.72382 8.51514 7.49996 8.51514 7.22382L8.51514 2.72382ZM3.34281 8.10325L8.36869 3.07737L7.66158 2.37026L2.6357 7.39614L3.34281 8.10325Z'
															fill='#AE2524'
														/>
													</svg>
												</span>
											</span>
											<Link
												href={item?.href}
												dangerouslySetInnerHTML={{ __html: item?.name }}
												className={classes.submenu__servicesContentListItemLink}
											/>
										</li>
									))}
							</ul>
						</div>
					))}
			</div>
			<div className={classes.submenu__servicesTech}>
				{technologies &&
					technologies?.map((technology, index) => (
						<Link
							href={technology.href}
							key={index}
							className={classes.submenu__servicesTechItem}
							target={technology?.target === '1' && '_blank'}
						>
							<Image
								src={technology.icon}
								alt={technology.href}
								width={64}
								height={48}
							/>
						</Link>
					))}
			</div>
		</div>
	);
}
