import { forwardRef } from 'react';

import classes from './switcher.module.scss';

export const SwitcherComponent = forwardRef(
	({ id, label, id_prefix, type = 'radio', isChecked, register }, ref) => {
		return (
			<label
				htmlFor={id}
				className={classes.switcher}
				ref={ref}
			>
				<div className={classes.switcher__container}>
					<div className={classes.switcher__state}>
						<div className={classes.switcher__stateRing}></div>
					</div>
					<input
						id={id}
						type={type}
						defaultChecked={isChecked}
						value={label}
						hidden
						{...register('type_project')}
					/>
				</div>

				{label}
			</label>
		);
	}
);
SwitcherComponent.displayName = 'switcher';
export const Switcher = SwitcherComponent;
