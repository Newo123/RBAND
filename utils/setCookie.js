export const setCookie = locale => {
	document.cookie = `NEXT_LOCALE=${locale}; max-age=3153 6000; path=/`;
	// window.location.reload();
};
