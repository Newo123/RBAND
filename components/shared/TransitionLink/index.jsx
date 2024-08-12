import Link from 'next/link';
import { useContext, useRef } from 'react';

import { PageTransitionContext } from '@/contexts/PageTransition.context';

export const TransitionLink = ({ href, dataChildren, children, ...rest }) => {
	const { pageOut } = useContext(PageTransitionContext);
	const linkRef = useRef(null);
	return (
		<Link
			href={href}
			ref={linkRef}
			{...rest}
			onClick={e => {
				e.preventDefault();
				pageOut(linkRef?.current);
			}}
			data-children={dataChildren}
		>
			{children}
		</Link>
	);
};
