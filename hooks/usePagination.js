import { useEffect, useState } from 'react';

export function usePagination(props, coefficient) {
	const [propsItems, setPropsItems] = useState([...props]);
	const [count, setCount] = useState(coefficient);
	const [items, setItems] = useState([...props.slice(0, count)]);
	const [fetching, setFetching] = useState(false);

	const onScroll = e => {
		if (
			e.target.documentElement.scrollHeight -
				(e.currentTarget.innerHeight + e.target.documentElement.scrollTop) <
			400
		) {
			setFetching(true);
		}
	};

	useEffect(() => {
		if (fetching) {
			setItems([...items, ...propsItems.slice(count, count + coefficient)]);
			setCount(count + coefficient);
			setFetching(false);
		}

		if (props !== propsItems) {
			setPropsItems([...props]);
			setItems([...props.slice(0, count)]);
		}
	}, [fetching, props]);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return { items };
}
