const fs = require('fs');
const pify = require('pify');
const {flow, filter, map} = require('lodash/fp');

const readdir = pify(fs.readdir);

const buildRoutes = flow(
	filter(route => route.endsWith('.jsx')),
	map(route => route.replace('.jsx', '').replace('index', ''))
);

module.exports = () => readdir('src/routes').then(routes => buildRoutes(routes));
