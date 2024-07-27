import Image from 'next/image';

import classes from './Motivations.module.scss';

export function MotivationsItem({ href, description }) {
	return (
		<div className={classes.motivations__item}>
			<div className={classes.motivations__itemContent}>
				<div className={classes.motivations__itemContentImage}>
					<Image
						src={href}
						alt={description.title}
						width={107}
						height={90}
						unoptimized={true}
					/>
				</div>
				<h6 className={classes.motivations__itemContentTitle}>
					{description.title}
				</h6>
			</div>
			{description.description_title.length > 0 && (
				<div className={classes.motivations__itemText}>
					{description.description_title.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			)}
		</div>
	);
}
