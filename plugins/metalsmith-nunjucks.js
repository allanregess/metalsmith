const nunjucks = require('nunjucks');
const multimatch = require('multimatch');
const path = require('path');

module.exports = (config) => {
	config = Object.assign({
		data: '**/*.json',
		ext: '.html',
		env: () => null
	}, config);
	const nunjucksConfig = Object.assign({
		autoescape: true
	}, config.nunjucks);

	return (files, ms, done) => {
		config.env(nunjucks.configure(path.resolve(ms._source, config.root), nunjucksConfig));
		const matchedFiles = multimatch(Object.keys(files), config.data);
		if (matchedFiles.length) {
			matchedFiles.forEach((file) => {
				const contents = files[file].contents;
				try {
					files[file].data = contents.constructor === Buffer ? JSON.parse(contents) : contents;
				} catch(e) {
					files[file].data = {body: `Error parsing JSON: ${e}`};
				}
				var data = files[file].data;
				files[file].contents = nunjucks.render(data._template || config.defaultTemplate, data);
			});
		}
		done();
	}
};
