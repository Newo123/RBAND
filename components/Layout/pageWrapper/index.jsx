export function PageWrapper({ children, ...rest }) {
	return (
		<div
			style={{ backgroundColor: '#fff', position: 'relative' }}
			{...rest}
		>
			{children}
		</div>
	);
}
