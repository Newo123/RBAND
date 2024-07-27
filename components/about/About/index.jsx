import { Container } from '@/components/shared/Container';
import { TextWrap } from '@/components/shared/TextWrap';

import classes from './About.module.scss';
import { AboutHead } from './AboutHead.jsx';
import { AboutPartners } from './AboutPartners.jsx';
import { AboutSticky } from './AboutSticky.jsx';

export function About({
	info,
	projects,
	images,
	textImages,
	video,
	reputations,
	reviews,
	mobileTitleStart,
	mobileTitleEnd,
	mobileDescription,
	mobileButton,
	buttonCard
}) {
	return (
		<section className={classes.about}>
			{images && images.length > 0 && (
				<TextWrap
					images={images}
					textImages={textImages}
					className={classes.about__textWrap}
				/>
			)}
			<Container
				variant='xl'
				className={classes.about__container}
			>
				<AboutSticky info={info} />
				<div className={classes.about__content}>
					<AboutHead
						video={video}
						reputations={reputations}
					/>
					<AboutPartners
						projects={projects}
						reviews={reviews}
						mobileTitleStart={mobileTitleStart}
						mobileTitleEnd={mobileTitleEnd}
						mobileDescription={mobileDescription}
						mobileButton={mobileButton}
						buttonCard={buttonCard}
					/>
				</div>
			</Container>
		</section>
	);
}
