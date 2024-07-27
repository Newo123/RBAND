import { useGSAP } from '@gsap/react';
import cn from 'clsx';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import classes from './styles.module.scss';

export function AdvantagesItem({ advantage, setIsActive, isHome, id }) {
	const itemRef = useRef(null);
	const { name, href, description, children, image, html, path, isActive } =
		advantage;

	useGSAP(
		() => {
			ScrollTrigger.create({
				trigger: itemRef.current,
				start: 'top 50%',
				end: 'bottom 50%',
				onToggle: self => {
					if (self.isActive) {
						setIsActive(id);
					} else {
						setIsActive('');
					}
				}
			});
		},
		{ scope: itemRef, dependencies: [setIsActive] }
	);

	return (
		<div
			className={classes.advantages__trigger}
			ref={itemRef}
		>
			<div
				className={cn(
					classes.advantages__item,
					isActive ? classes.advantages__item_active : '',
					classes.advantages__item_home
				)}
			>
				<div
					className={cn(
						classes.advantages__itemImage,
						isHome && classes.advantages__itemImage_home
					)}
				>
					{isHome && (
						<span className={classes.advantages__itemImageCount}>
							{Number(advantage.id) < 9 ? '0' + advantage.id : advantage.id}
						</span>
					)}
					<Image
						src={path || image}
						alt={name}
						sizes='100vw'
						width={900}
						height={600}
					/>
				</div>

				{isHome && (
					<div
						className={classes.advantages__itemContent}
						key={name}
					>
						<h5
							className={cn(classes.advantages__itemTitle, 'site-title-6')}
							dangerouslySetInnerHTML={{ __html: name }}
						/>
						<p
							className={cn(
								classes.advantages__itemText,
								isHome ? classes.advantages__itemText_home : ''
							)}
							dangerouslySetInnerHTML={{ __html: description }}
						/>

						{children.length > 0 && (
							<div className={classes.advantages__itemLinks}>
								{children.map((link, index) => (
									<Link
										href={link.href}
										key={index}
										className={classes.advantages__itemLink}
									>
										<span></span>
										{link.name}
									</Link>
								))}
							</div>
						)}
					</div>
				)}

				{html && (
					<div
						className={classes.advantages__itemContent}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				)}
				{/* {blocks > 0 &&
					blocks.map(block => (
						<div
							className={classes.advantages__itemContent}
							key={block.title}
						>
							<h5 className={cn(classes.advantages__itemTitle, 'site-title-6')}>
								{name}
							</h5>
							{block.text.map((t, index) => (
								<p
									className={cn(
										classes.advantages__itemText,
										isHome ? classes.advantages__itemText_home : ''
									)}
									key={id + index}
								>
									{t}
								</p>
							))}
							{block.labels && block.labels.length > 0 && (
								<div className={classes.advantages__itemLabels}>
									{block.labels?.map((label, index) => (
										<div
											className={classes.advantages__itemLabel}
											key={id + index}
										>
											<span></span>
											{label}
										</div>
									))}
								</div>
							)}

							{block.links && block.links.length > 0 && (
								<div className={classes.advantages__itemLinks}>
									{block.links.map((link, index) => (
										<Link
											href={link.href}
											key={index}
											className={classes.advantages__itemLink}
										>
											<span></span>
											{link.text}
										</Link>
									))}
								</div>
							)}
						</div>
					))} */}
			</div>
		</div>
	);
}
