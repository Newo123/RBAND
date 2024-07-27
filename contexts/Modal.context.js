import { createContext } from 'react';

export const ModalContext = createContext({
	open: children => {},
	close: () => {}
});
