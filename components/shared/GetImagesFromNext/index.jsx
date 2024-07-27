import { getImageProps } from 'next/image';

export const GetImagesFromNext = ({ images, ...rest }) => {
	const imageItems = [];
	images.forEach(image => {
		imageItems.push({
			...getImageProps({
				...rest,
				alt: image.title,
				src: image.href
			}).props,
			...(image.property.max_width &&
				Number(image.property.max_width) > 0 && {
					maxWidth: `(max-width: ${image.property.max_width}px)`
				})
		});
	});

	return (
		<picture>
			{imageItems.length > 0 &&
				imageItems.map((item, index) => {
					return item.maxWidth ? (
						<source
							key={index}
							media={item.maxWidth}
							srcSet={item.srcSet}
						/>
					) : (
						<img
							{...item}
							key={index}
						/>
					);
				})}
		</picture>
	);
};
