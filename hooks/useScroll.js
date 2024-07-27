import { useEffect, useState } from 'react';

export function useScroll() {
	const [scroll, setScroll] = useState(0);

	const handleScroll = e => {
		setScroll(e.currentTarget.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setScroll(window.scrollY);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return { scroll, setScroll };
}
