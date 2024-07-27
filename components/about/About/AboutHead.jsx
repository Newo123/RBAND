import Image from 'next/image';

import classes from './About.module.scss';

export function AboutHead({ image, reputations, video }) {
	return (
		<div className={classes.about__contentHead}>
			{image ||
				(video && (
					<div className={classes.about__contentHeadVideo}>
						{image && (
							<Image
								src={image}
								alt='about images'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						)}
						{video && (
							<video
								loop
								autoPlay
								preload='auto'
								muted={true}
								playsInline
								controls={false}
							>
								<source
									src={video}
									type={'video/mp4'}
								/>
							</video>
						)}
					</div>
				))}

			<div className={classes.about__contentHeadReputation}>
				{reputations &&
					reputations.length > 0 &&
					reputations.map((rep, index) => (
						<div
							className={classes.about__contentHeadReputationItem}
							key={index}
						>
							<p>
								<strong>{rep.title}</strong>
							</p>
							<p>{rep.description}</p>
						</div>
					))}
			</div>
		</div>
	);
}
