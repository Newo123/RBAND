export const getVideoMedia = video => {
	let videoMedia;

	for (const key in video.property) {
		if (key === 'max_width')
			videoMedia = `(max-width:${video.property[key]}px)`;
	}

	return videoMedia || '';
};
