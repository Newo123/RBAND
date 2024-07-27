import cn from 'clsx';

import { intro, montserrat } from '@/utils/fonts';

export function FontsProvider({ children }) {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	};
	return (
		<div
			className={cn(montserrat.className, montserrat.variable, intro.variable)}
			style={styles}
		>
			{children}
		</div>
	);
}
