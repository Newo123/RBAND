import Head from 'next/head';
import { useRouter } from 'next/router';

export const Metadata = ({ head, domain }) => {
	const router = useRouter();

	return (
		<Head>
			<title>{head.title}</title>

			<meta
				name='description'
				content={head.description}
			/>
			{head.keywords && (
				<meta
					name='keywords'
					content={head.keywords}
				/>
			)}

			<meta
				httpEquiv='X-UA-Compatible'
				content='IE=edge'
			/>
			{head.icons.length > 0 &&
				head.icons.map(icon => (
					<link
						href={icon.image}
						rel='icon'
						type={`image/${icon.type}`}
						sizes={icon.size}
						key={icon.image}
					/>
				))}
			<link
				href={`${domain}${router.pathname}`}
				rel='canonical'
			/>
			{head.og &&
				Object.entries(head.og).map(([key, value]) => {
					if (!key && !value) return;
					if (key === 'og:url') {
						return (
							<meta
								key={key}
								property={key}
								content={`${domain}${router.pathname}`}
							/>
						);
					} else if (Array.isArray(value)) {
						return value.map(v => (
							<meta
								key={key}
								property={key}
								content={v}
							/>
						));
					} else if (value) {
						return (
							<meta
								key={key}
								property={key}
								content={`${value.startsWith('/') ? domain : ''}${value.toString()}`}
							/>
						);
					}
				})}
		</Head>
	);
};
