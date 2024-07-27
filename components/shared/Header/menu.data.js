export const menu = [
	{
		// href: '/asdas',
		title: 'Услуги',
		services: [
			{
				name: 'Сайты и web&#8209;сервисы',
				href: '/web',
				children: [
					{
						name: 'Лендинг & сайт-визитка',
						href: '/web/landing'
					},
					{
						name: 'Бизнес-сайт',
						href: '/web/business-site'
					},
					{
						name: 'Интернет-каталог',
						href: '/web/online-catalog'
					},
					{
						name: 'Интернет-магазин',
						href: '/web/online-store'
					},
					{
						name: 'Интернет-сервис',
						href: '/web/web-service'
					}
				]
			},
			{
				name: 'Интернет реклама и продвижение',
				href: '/marketing',
				children: [
					{
						name: 'SEO продвижение',
						href: '/marketing/seo'
					},
					{
						name: 'Контекстная реклама в поиске',
						href: '/marketing/context'
					},
					{
						name: 'Таргетированная реклама и SMM',
						href: '/marketing/targeting'
					},
					{
						name: 'Комбинированное продвижение',
						href: '/marketing/complex'
					}
				]
			},
			{
				name: 'Дизайн и <br>брендинг',
				href: '/design',
				children: [
					{
						name: 'Логотип & Гайдлайн',
						href: '/design/b2b-logotype'
					},
					{
						name: 'Фирменный стиль',
						href: '/design/b2b-identity'
					},
					{
						name: 'Дизайн поддержка<p> полиграфия, авто, соц.сети, реклама</p>',
						href: '/design/b2b-brending'
					},
					{
						name: 'Бренд-исследование',
						href: '/design/brand-research'
					}
				]
			}
		]
	},
	{
		href: '/about',
		title: 'Мы'
	},
	{
		title: 'Проекты',
		children: [
			{
				name: 'Сайты и сервисы',
				href: '/projects/sites-services'
			},
			{
				name: 'Интернет продвижение',
				href: '/projects/internet-marketing'
			},
			{
				name: 'Логотипы',
				href: '/projects/logotypes'
			},
			{
				name: 'Брендинг',
				href: '/projects/branding'
			}
		]
		// preview: {
		// 	children: [
		// 		{
		// 			name: 'Сайт завода «Термотрон», Россия',
		// 			href: 'https://termotron.ru',
		// 			target: true
		// 		}
		// 	]
		// }
	},
	{
		title: 'Блог',
		children: [
			{
				name: 'Мир дизайна',
				href: '/blog/about-design'
			},
			{
				name: 'Скрипты & плагины',
				href: '/blog/scripts-plugins'
			},
			{
				name: 'How-to ',
				href: '/blog/how-to'
			},
			{
				name: 'Ревью',
				href: '/blog/us-reviews'
			},
			{
				name: 'Рекомендации',
				href: '/blog/guides'
			},
			{
				name: 'PRO маркетинг',
				href: '/blog/pro-marketing'
			}
		]
	},
	{
		href: '/reviews',
		title: 'Отзывы'
	},
	{
		href: '/contacts',
		title: 'Контакты'
	}
]

// const switchers: Array<TypeSwitcher> = [
// 	{
// 		id: 'web-service',
// 		label: 'Сайт или web-сервис',
// 		name: 'type-project',
// 		isChecked: true
// 	},
// 	{
// 		id: 'internet-promotion',
// 		label: 'Интернет-продвижение',
// 		name: 'type-project',
// 		isChecked: false
// 	},
// 	{
// 		id: 'Design-logo-or-branding',
// 		label: 'Дизайн, лого или брендинг',
// 		name: 'type-project',
// 		isChecked: false
// 	}
// ]

// const inputs: Array<TypeInput> = [
// 	{
// 		placeholder: 'Имя *',
// 		id: 'name',
// 		name: 'name',
// 		type: 'text'
// 	},
// 	{
// 		placeholder: 'Телефон *',
// 		id: 'phone',
// 		name: 'phone',
// 		type: 'phone'
// 	}
// ]

// export const call = {
// 	title: 'Написать в RBAND',
// 	text: 'Расскажите о своём проекте или предложении. Сообщение сразу попадёт к нужному специалисту или руководителю.',
// 	switchers: switchers,
// 	inputs: inputs
// }

export const localesRegions = [
	{
		country: 'Srbija',
		href: '/',
		cities: [
			{
				title: 'Beograd',
				href: '/'
			},
			{
				title: 'Novi Sad',
				href: '/'
			},
			{
				title: 'Niš',
				href: '/'
			},
			{
				title: 'Kragujevac',
				href: '/'
			},
			{
				title: 'Subotica',
				href: '/'
			}
		]
	},
	{
		country: 'Montenegro',
		href: '/',
		cities: [
			{
				title: 'Bar',
				href: '/'
			},
			{
				title: 'Podgorica',
				href: '/'
			},
			{
				title: 'Tivat',
				href: '/'
			},
			{
				title: 'Budva',
				href: '/'
			},
			{
				title: 'Kotor',
				href: '/'
			},
			{
				title: 'Herceg Novi',
				href: '/'
			},
			{
				title: 'Nikšić',
				href: '/'
			}
		]
	},
	{
		country: 'Hrvatska',
		href: '/',
		cities: [
			{
				title: 'Zagreb',
				href: '/'
			},
			{
				title: 'Dubrovnik',
				href: '/'
			},
			{
				title: 'Split',
				href: '/'
			},
			{
				title: 'Rijeka',
				href: '/'
			},
			{
				title: 'Zadar',
				href: '/'
			}
		]
	}
]
export const localesCountry = [
	{
		title: 'Русский',
		href: '/'
	},
	{
		title: 'English',
		href: '/'
	},
	{
		title: 'Srpski',
		href: '/'
	}
]
