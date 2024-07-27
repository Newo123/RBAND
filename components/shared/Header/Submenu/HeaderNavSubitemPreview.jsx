import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import classes from './styles.module.scss';

export function HeaderNavSubitemPreview({ child, isOpen }) {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef?.current[`${isOpen ? 'play' : 'pause'}`]();
			if (!isOpen) {
				videoRef.current.currentTime = 0;
			}
		}
	}, [isOpen]);
	return (
		<Link
			href={child.href}
			className={classes.submenu__previewsItem}
		>
			<div className={classes.submenu__previewsItemPictures}>
				{child.feed_image && (
					<Image
						src={child.feed_image}
						fill={true}
						alt={child.name}
					/>
				)}

				{child.video && (
					<video
						ref={videoRef}
						loop
						// autoPlay
						preload='auto'
						muted={true}
						playsInline
						controls={false}
						poster={child.feed_image}
					>
						<source
							src={child.video}
							type='video/mp4'
						/>
					</video>
				)}
			</div>

			<h6
				dangerouslySetInnerHTML={{ __html: child.name }}
				className={classes.submenu__previewsItemTitle}
			/>
		</Link>
	);
}
