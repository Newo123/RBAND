import { createContext } from 'react';

export const PageTransitionContext = createContext({
	pageIn: () => {},
	pageOut: url => {}
});
