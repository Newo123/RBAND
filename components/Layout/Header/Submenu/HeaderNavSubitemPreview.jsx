import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { GetImagesFromNext } from '@/components/shared/GetImagesFromNext';

import { getVideoMedia } from '@/utils/getVideoMedia';

import classes from './styles.module.scss';

export function HeaderNavSubitemPreview({ item, isOpen }) {
	const videoRef = useRef(null);
	const isInView = useInView(videoRef);

	useEffect(() => {
		if (isInView && videoRef?.current) {
			videoRef?.current?.play();
		} else if (videoRef?.current) {
			videoRef?.current?.pause();
		}
	}, [isInView]);

	return (
		<Link
			href={item?.href}
			className={classes.submenu__contentPreviewsItem}
		>
			<div className={classes.submenu__contentPreviewsItemPictures}>
				{item?.anons_videos && item?.anons_videos.length > 0 ? (
					<video
						ref={videoRef}
						preload='auto'
						controls={false}
						loop
						playsInline
						muted
					>
						{item?.anons_videos.map((el, index) => {
							const props = {
								src: el.href,
								type: `video/${el.href.split('.')[el.href.split('.').length - 1]}`,
								...(el.property['max_width'] && {
									media: `${getVideoMedia(el)}`
								})
							};
							return (
								<source
									key={index}
									{...props}
								/>
							);
						})}
					</video>
				) : (
					<GetImagesFromNext
						images={item?.anons_images}
						sizes='100vw'
						fill
					/>
				)}
			</div>
			<h6
				className={classes.submenu__contentPreviewsItemTitle}
				dangerouslySetInnerHTML={{ __html: item.name }}
			/>
		</Link>
	);
}
