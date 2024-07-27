import cn from 'clsx';

import Heading from '@/components/ui/Heading';

import classes from './styles.module.scss';

export function PrinciplesContent({ title, items }) {
	return (
		<div className={classes.principles__content}>
			<h5
				className={cn(classes.principles__title, 'site-title-2')}
				dangerouslySetInnerHTML={{ __html: title }}
			/>
			{items.length > 0 &&
				items.map((item, index) => (
					<Heading
						tag='div'
						className={classes.principles__contentItem}
						key={index}
					>
						<h6
							className={classes.principles__contentItemTitle}
							dangerouslySetInnerHTML={{ __html: item.title }}
						/>
						<p className={classes.principles__contentItemText}>
							{item.description}
						</p>
						{/* {item.text.length > 0 &&
							item.text.map((t, i) => (
								<p
									className={classes.principles__contentItemText}
									key={i}
								>
									{t}
								</p>
							))} */}
					</Heading>
				))}
		</div>
	);
}
