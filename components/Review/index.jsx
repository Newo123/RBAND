import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Container } from '../shared/Container';
import { Bullet } from '../ui/Bullet';
import { Form } from '../ui/Form';
import { LightBox } from '../ui/LightBox';

import classes from './Review.module.scss';

export function Review({
	bulletTitle,
	author,
	project,
	text,
	title,
	certificate,
	description,
	review_letter,
	text_projects_reviews_title,
	form_title,
	id_prefix,
	name,
	form_items,
	privacy,
	submit_button
}) {
	const [state, setState] = useState(false);

	useEffect(() => {
		if (state === true) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	}, [state]);
	return (
		<section className={classes.review}>
			<Container
				variant='xl'
				className={classes.review__container}
			>
				<Bullet
					className={classes.review__bullet}
					title={form_title}
				>
					<Form
						prefix={id_prefix}
						items={form_items}
						privacy={privacy}
						button={submit_button}
					/>
				</Bullet>
				<div className={classes.review__content}>
					<div className={classes.review__contentLeft}>
						<h3
							className={classes.review__contentTitle}
							dangerouslySetInnerHTML={{ __html: text_projects_reviews_title }}
						/>
						<p
							className={classes.review__contentProject}
							dangerouslySetInnerHTML={{ __html: description.name_project }}
						/>
						<p
							className={classes.review__contentText}
							dangerouslySetInnerHTML={{
								__html: description.description.join(' ')
							}}
						/>
						<p
							className={classes.review__contentAuthor}
							dangerouslySetInnerHTML={{ __html: description.user }}
						/>
					</div>
					{review_letter && (
						<div
							className={classes.review__contentImage}
							onClick={() => setState(true)}
						>
							<Image
								src={review_letter}
								alt={text_projects_reviews_title}
								width={320}
								height={426}
							/>
							<div className={classes.review__contentImageButton}>
								<Icon icon='bitcoin-icons:search-filled' />
							</div>
						</div>
					)}
				</div>
			</Container>
			{state && (
				<LightBox
					image={review_letter ? review_letter : ''}
					title={text_projects_reviews_title}
					state={state}
					setState={setState}
				/>
			)}
		</section>
	);
}
