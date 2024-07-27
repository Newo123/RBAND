import Image from 'next/image';

import classes from './HorizontalSection.module.scss';

const HorizontalSectionPerson = ({ description, href, sort }) => {
	return (
		<div className={classes.section__card}>
			<div className={classes.section__cardImage}>
				<Image
					src={href}
					alt={description.title}
					width={361}
					height={361}
					// fill
					// quality={75}
					sizes='100vw'
				/>
			</div>
			<h6 className={classes.section__cardName}>{description.title}</h6>
			<p className={classes.section__cardJob}>{description.position}</p>
			<p className={classes.section__cardAbout}>
				{description.description_title}
			</p>
		</div>
	);
};

export { HorizontalSectionPerson };
