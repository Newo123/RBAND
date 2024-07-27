import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import { Tooltip } from '@/components/ui/Tooltip';

import classes from './styles.module.scss';

export function StagesText({ text }) {
	const textRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: textRef,
		offset: ['start 0.8', 'start 0.25']
	});

	const words = text.text.toString().split(' ');

	return (
		<p
			className={classes.stages__descriptionText}
			ref={textRef}
		>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;

				const tooltipKeys = Object.keys(text).slice(
					1,
					Object.keys(text).length
				);

				const tooltip = tooltipKeys.filter(item =>
					word.toLowerCase().startsWith(item)
				);

				return (
					<Word
						key={i}
						range={[start, end]}
						progress={scrollYProgress}
						tooltip={tooltip.length > 0 ? text[tooltip[0]] : ''}
					>
						{tooltip.length > 0 ? `<strong>${word} </strong>` : word + ' '}
					</Word>
				);
			})}
		</p>
	);
}

const Word = ({ children, progress, range, tooltip }) => {
	const maxWidth = useTransform(progress, range, ['100%', '0%']);
	const [visible, setVisible] = useState(false);
	const htmlTagRegex = /<("[^"]*"|'[^']*'|[^'">])*>/;
	const reg = new RegExp(htmlTagRegex);
	return (
		<span className={classes.word}>
			{reg.test(children) ? (
				<span
					style={{ position: 'relative' }}
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
				>
					<span
						dangerouslySetInnerHTML={{
							__html: children
						}}
					/>
					{visible && tooltip && (
						<Tooltip
							link={{
								href: tooltip.link,
								text: 'Читать подробнее',
								target: '_blank'
							}}
							text={tooltip.title + tooltip.text}
						/>
					)}
				</span>
			) : (
				<span>{children}</span>
			)}
			<motion.span
				className={classes.word__shadow}
				style={{ maxWidth: maxWidth }}
			></motion.span>
		</span>
	);
};
