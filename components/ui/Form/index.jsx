import { Button } from '../Button';
import { Input } from '../Input';

import classes from './styles.module.scss';

export function Form({ prefix, items, privacy, button }) {
	return (
		<form className={classes.form}>
			{items &&
				items.length > 0 &&
				items.map((item, index) => (
					<Input
						key={index}
						id={prefix + item.name}
						name={prefix + item.name}
						className={classes.form__input}
						type={item.type}
						label={item.label}
					/>
				))}
			<p
				className={classes.form__privacy}
				dangerouslySetInnerHTML={{ __html: privacy }}
			/>
			<Button
				className={classes.form__submit}
				style={{ flexShrink: 0 }}
			>
				{button}
			</Button>
		</form>
	);
}
