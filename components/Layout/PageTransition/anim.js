export const text = {
	initial: {
		opacity: 1
	},
	enter: {
		opacity: 0,
		top: -100,
		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
		transitionEnd: { top: '47.5%' }
	},
	exit: {
		opacity: 1,
		top: '40%',
		transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
	}
};

export const curve = (initialPath, targetPath) => {
	return {
		initial: {
			d: initialPath
		},
		enter: {
			d: targetPath,
			transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
		},
		exit: {
			d: initialPath,
			transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
		}
	};
};

export const translate = {
	initial: {
		top: '0'
	},
	enter: {
		top: '-100vh',
		transition: { duration: 0.75, delay: 0.75, ease: [0.76, 0, 0.24, 1] }
	},
	exit: {
		top: '0',
		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
	}
};
// export const translate = {
// 	initial: {
// 		top: '0'
// 	},
// 	enter: {
// 		top: '-100vh',
// 		transition: { duration: 0.75, delay: 0.75, ease: [0.76, 0, 0.24, 1] },
// 		transitionEnd: {
// 			top: '100vh'
// 		}
// 	},
// 	exit: {
// 		top: '0',
// 		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
// 	}
// };
export const textAnim = {
	initial: {
		translateY: '100%',
		opacity: 0
	},
	enter: {
		translateY: '0%',
		opacity: 1,
		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
		// transitionEnd: {
		// 	translateY: '-100%'
		// 	// opacity: 0,
		// 	// duration: 0.75
		// 	// ease: [0.76, 0, 0.24, 1]
		// 	// transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
		// }
	},
	exit: {
		translateY: '-100%',
		opacity: 0,

		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
	}
};
