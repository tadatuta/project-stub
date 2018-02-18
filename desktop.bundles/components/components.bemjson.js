module.exports = {
	block: 'page',
	title: 'BEM Components',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'components.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'components.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
	},
	content: [
		{
			block: 'button',
			mods: {
				theme: 'islands',
				size: 'm',
				view: 'action'
			},
			text: 'Купить сейчас!'
		},
		{
			block: 'input',
			mods: {
					theme: 'islands',
					size: 'm'
			},
			placeholder: 'Введите имя'
		}
	]
};