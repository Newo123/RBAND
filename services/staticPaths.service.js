class StaticPathsService {
	home = '/';
	services = {
		web: '/web',
		marketing: '/marketing',
		design: '/design'
	};
	about = '/about';
	useful = '/useful';
	projects = '/projects';
	reviews = '/reviews';
	contacts = '/contacts';
}

export const staticPathsService = new StaticPathsService();
