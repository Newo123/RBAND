export const getFormData = data => {
	const formData = new FormData();
	for (const key in data) {
		formData.append(key, data[key]);
	}

	return formData;
};
