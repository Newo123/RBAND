import { useGSAP } from '@gsap/react';
import cn from 'clsx';
import gsap from 'gsap';
import { useRef, useState } from 'react';

import classes from './styles.module.scss';

export const StagesItem = ({
	sort,
	description,
	title,
	isActive,
	index,
	setStagesArray,
	stagesArray
}) => {
	const itemRef = useRef(null);
	const [state, setState] = useState(true);

	useGSAP(
		() => {
			gsap.to(itemRef.current, {
				scrollTrigger: {
					trigger: '#stages-list',
					onEnter: self => {
						if (index === 0) {
							setState(false);

							setTimeout(() => {
								setState(true);
							}, 2500);
						}
					}
				},
				delay: index === 0 ? 0.3 : index / 3,
				opacity: 1,
				translateY: 0
			});
		},
		{ dependencies: [setState] }
	);
	return (
		<li
			className={cn(
				classes.stages__listItem,
				state && isActive && classes.stages__listItem_active
			)}
			onClick={() =>
				setStagesArray(
					stagesArray.map(item => {
						if (sort === item.sort) item.isActive = true;
						if (sort !== item.sort) item.isActive = false;
						return item;
					})
				)
			}
			ref={itemRef}
			style={{ opacity: 0, transform: 'translateY(100%)' }}
		>
			<span className={classes.stages__listNumber}>{sort}</span>
			<h5 className={classes.stages__listTitle}>{title}</h5>
			<p className={classes.stages__listText}>{description}</p>
		</li>
	);
};
