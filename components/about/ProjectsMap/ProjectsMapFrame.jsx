import cn from 'clsx';
import Image from 'next/image';

import classes from './ProjectsMap.module.scss';
import { dots } from './dots.data';

export function ProjectsMapFrame() {
	return (
		<>
			<div className={classes.projectsMap__planet}></div>
			<div className={classes.projectsMap__frame}>
				<Image
					src='/about/map.svg'
					alt='map'
					fill
				/>
			</div>
			<div className={classes.projectsMap__dotsContainer}>
				<ul className={classes.projectsMap__dots}>
					{dots.length > 0 &&
						dots.map(dot => (
							<li
								key={dot.id}
								className={cn(
									classes.projectsMap__dot,
									// @ts-ignore
									classes[`projectsMap__dot_${dot.id}`]
								)}
							>
								{dot.number}
							</li>
						))}
				</ul>
			</div>
		</>
	);
}
