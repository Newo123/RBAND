import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './Blog.module.scss';

const MLink = motion(Link);
const animation = {
	inactive: {
		transform: 'translateY(50%)',
		opacity: 0
	},
	active: {
		transform: 'translateY(0%)',
		opacity: 1
	}
};

export function BlogItem({ href, image, title, placeholder }) {
	const router = useRouter();
	return (
		<MLink
			locale={router.locale}
			href={href}
			className={classes.blog__item}
			initial='inactive'
			whileInView='active'
			variants={animation}
			transition={{ duration: 0.75 }}
			viewport={{ once: true }}
		>
			<div className={classes.blog__itemPictures}>
				{/* <BlurImage
					src={image}
					alt={title}
				/> */}
				<Image
					src={image}
					alt={title}
					// placeholder='blur'
					// blurDataURL={placeholder}
					fill
				/>
			</div>
			<h6 className={classes.blog__itemTitle}>{title}</h6>
		</MLink>
	);
}
