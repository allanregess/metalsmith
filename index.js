const
	njk = require('./plugins/metalsmith-nunjucks'),
	metalsmith = require('metalsmith'),
	ignore = require('metalsmith-ignore'),
	rewrite = require('metalsmith-rewrite'),
	htmlMinifier = require("metalsmith-html-minifier");;

const config = {
	root: process.env.impRoot || process.env.npm_package_config_root || ''
};

var siteBuild = metalsmith(__dirname)
	.clean(false)
	.use(ignore([
		'njk/**',
		'js/**',
		'styl/**'
	]))
	.use(njk({
		data: 'data/**/*.json',
		root: 'njk',
		env: (env) => {
			const url = require('url');
			env.addFilter('shorten', (str, count) => str.slice(0, count || 5));
			env.addGlobal('root', (str) => url.resolve(config.root, str));
		},
		defaultTemplate: 'pages/home.njk'
	}))
	.use(rewrite({
		pattern: 'data/**/*.json',
		filename: (meta, file) => file.replace(/data\//, '').replace(/\.json$/, '.html')
	}))
	.use(htmlMinifier())
	.build((err, files) => {
		if (err) {
			throw err;
		}
	});

