import Image from 'next/image';

import classes from './ImageBackgroundScroll.module.scss';

// const MImage = motion(Image);
export function ImageBackgroundScroll({ pictures }) {
	// const { scrollYProgress, scrollY } = useScroll();

	// const position = useTransform(
	// 	scrollYProgress,
	// 	[0, 1],
	// 	['center 100%', 'center -250%']
	// );

	return (
		<div className={classes.image}>
			<Image
				src={pictures}
				alt='img'
				fill
				priority={true}
			/>
		</div>
	);
}
