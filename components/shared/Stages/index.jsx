import { useEffect, useState } from 'react';

import { Bullet } from '@/components/ui/Bullet';
import { Form } from '@/components/ui/Form';

import { Container } from '../Container';
import { TextWrap } from '../TextWrap';

import { StagesImages } from './StagesImages';
import { StagesItem } from './StagesItem';
import { StagesText } from './StagesText';
import classes from './styles.module.scss';

const words =
	'Мы используем комбинацию методов <strong>Agile</strong>, <strong>Waterfall</strong> и <strong>KISS</strong> для продуктивного сотрудничества между всеми вовлеченными сторонами проекта и достижения результатов в срок.';

export function Stages({ stages, form }) {
	const [stagesArray, setStagesArray] = useState([]);

	useEffect(() => {
		if (stages.stages_array && stages.stages_array.length > 0) {
			setStagesArray(
				stages.stages_array.map((stage, index) => {
					if (index === 0) {
						stage.isActive = true;
					} else {
						stage.isActive = false;
					}
					return stage;
				})
			);
		}
	}, []);

	// const tword = stages.description.text
	// 	.split(' ')
	// 	.map(item => {
	// 		if (
	// 			item.toLowerCase().startsWith('agile') ||
	// 			item.toLowerCase().startsWith('waterfall') ||
	// 			item.toLowerCase().startsWith('kiss')
	// 		) {
	// 			return `<strong>${item}</strong>`;
	// 		}

	// 		return item;
	// 	})
	// 	.join(' ');

	return (
		<section className={classes.stages}>
			<TextWrap
				images={stages.title_svg}
				textImages={stages.title}
				className={classes.stages__textWrap}
			/>

			<Container
				variant='xl'
				className={classes.stages__container}
			>
				<div className={classes.stages__box}>
					<StagesImages content={stages.stages_array} />
					<ul
						className={classes.stages__list}
						id='stages-list'
					>
						{stages.stages_array &&
							stages.stages_array.length > 0 &&
							stages.stages_array.map((stage, index) => (
								<StagesItem
									{...stage}
									setStagesArray={setStagesArray}
									stagesArray={stagesArray}
									key={stage.number}
									index={index}
								/>
							))}
					</ul>
				</div>
				<StagesText text={stages.description} />
				<Bullet
					className={classes.stages__bullet}
					title={form.form_title}
				>
					<Form form={form} />
				</Bullet>
			</Container>
		</section>
	);
}
