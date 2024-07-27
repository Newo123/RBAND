import classes from '../styles.module.scss';

export function PersonStatistics({ statistics }) {
	return (
		<div className={classes.principles__personStatistic}>
			{statistics.length && (
				<ul className={classes.principles__personStatisticList}>
					{statistics.map(
						(statistic, index) =>
							index !== statistics.length - 1 && (
								<li
									className={classes.principles__personStatisticItem}
									key={index}
									dangerouslySetInnerHTML={{ __html: statistic }}
								/>
							)
					)}
				</ul>
			)}
			<div
				className={classes.principles__personStatisticAbout}
				dangerouslySetInnerHTML={{ __html: statistics[statistics.length - 1] }}
			/>
			{/* {educations.length > 0 && (
				<div className={classes.principles__personStatisticAbout}>
					{educations.map((education, index) => (
						<p key={index}>{education}</p>
					))}
				</div>
			)} */}
		</div>
	);
}
