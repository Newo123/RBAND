import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import classes from './Tooltip.module.scss';

export function Tooltip({ text, link }) {
	const containerRef = useRef(null);
	const [position, setPosition] = useState(0);
	useEffect(() => {
		// const el = containerRef.current?.getBoundingClientRect().left!! + containerRef.current?.offsetWidth!! - window.innerWidth
		const el =
			containerRef.current.getBoundingClientRect().left +
			containerRef.current.offsetWidth -
			window.innerWidth;
		if (el > 0) {
			setPosition(el + 20);
		}
	}, []);
	return (
		<div className={classes.tooltip}>
			<div
				className={classes.tooltip__box}
				ref={containerRef}
				style={{ transform: `translateX(-${position}px)` }}
			>
				<p
					dangerouslySetInnerHTML={{ __html: text }}
					className={classes.tooltip__text}
				/>
				{link && (
					<Link
						href={link.href}
						target={link.target}
						className={classes.tooltip__link}
					>
						{link.text}
					</Link>
				)}
			</div>
		</div>
	);
}
