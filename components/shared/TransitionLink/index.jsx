'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { animationPageOut } from '@/utils/animation';

export function TransitionLink({ href, children, className }) {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = e => {
		e.preventDefault();
		if (pathname !== href) {
			animationPageOut(href, router);
		}
	};

	return (
		<Link
			href={href}
			onClick={handleClick}
			className={className}
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
}
