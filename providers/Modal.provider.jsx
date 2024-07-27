import dynamic from 'next/dynamic';
import { useState } from 'react';

import { ModalContext } from '@/contexts/Modal.context';

const ComponentModal = dynamic(() => import('../components/ui/Modal'), {
	ssr: false
});

export default function ModalProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState();

	const open = children => {
		setIsOpen(true);
		setContent(children);
	};

	const close = () => {
		setIsOpen(false);
	};

	const valueModalProvider = {
		open,
		close
	};

	return (
		<ModalContext.Provider value={valueModalProvider}>
			{children}
			<ComponentModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				{content}
			</ComponentModal>
		</ModalContext.Provider>
	);
}
