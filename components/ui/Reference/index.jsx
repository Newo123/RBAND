import { useGSAP } from '@gsap/react';
import cn from 'clsx';
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function Reference({ children, className, ...rest }) {
	const linkRef = useRef(null);
	const router = useRouter();
	useGSAP(
		() => {
			gsap.to(linkRef.current, {
				scrollTrigger: {
					trigger: linkRef.current
				},
				opacity: 1,
				translateY: 0,
				delay: 0.7
			});
		},
		{ scope: linkRef }
	);
	return (
		<Link
			className={cn(className)}
			ref={linkRef}
			{...rest}
			style={{ opacity: 0, transform: 'translateY(100%)' }}
			locale={router.locale}
		>
			{children}
		</Link>
	);
}
