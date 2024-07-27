import classes from '../styles.module.scss';

export function PersonAbout({ aboutName, aboutText, educations }) {
	return (
		<div className={classes.principles__personAbout}>
			{aboutName && (
				<h6
					className={classes.principles__personAboutName}
					dangerouslySetInnerHTML={{ __html: aboutName }}
				/>
			)}
			<div
				className={classes.principles__personStatisticAbout}
				dangerouslySetInnerHTML={{ __html: educations[educations.length - 1] }}
			/>
			{/* {educations.length > 0 && (
				<div className={classes.principles__personStatisticAbout}>
					{educations.map((education, i) => (
						<p key={i}>{education}</p>
					))}
				</div>
			)} */}
			{aboutText.length > 0 && (
				<div className={classes.principles__personAboutText}>
					{aboutText.map((about, i) => (
						<p key={i}>{about}</p>
					))}
				</div>
			)}
		</div>
	);
}
