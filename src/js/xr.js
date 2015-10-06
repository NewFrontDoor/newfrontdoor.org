/* eslint-env browser */
const res = function res(xhr) {
	return {
		status: xhr.status,
		response: xhr.response,
		xhr
	};
};

const getParams = (data, url) => {
	const ret = data.map(k => {
		return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`;
	});

	if (url && url.split('?').length > 1) {
		ret.push(url.split('?')[1]);
	}
	return ret.join('&');
};

const Methods = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
	PATCH: 'PATCH',
	OPTIONS: 'OPTIONS'
};

const Events = {
	READY_STATE_CHANGE: 'readystatechange',
	LOAD_START: 'loadstart',
	PROGRESS: 'progress',
	ABORT: 'abort',
	ERROR: 'error',
	LOAD: 'load',
	TIMEOUT: 'timeout',
	LOAD_END: 'loadend'
};

const defaults = {
	method: Methods.GET,
	data: undefined,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	dump: JSON.stringify,
	load: JSON.parse,
	xmlHttpRequest: function xmlHttpRequest() {
		return new XMLHttpRequest();
	},
	promise: function promise(fn) {
		return new Promise(fn);
	}
};

let config = {};

const configure = opts => {
	config = Object.assign({}, config, opts);
};

const xr = args => {
	return new Promise((resolve, reject) => {
		const opts = Object.assign({}, defaults, config, args);
		const xhr = opts.xmlHttpRequest();

		xhr.open(opts.method, opts.params ? `${opts.url.split('?')[0]}?${getParams(opts.params)}` : opts.url, true);

		xhr.addEventListener(Events.LOAD, () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				let data;

				if (xhr.response) {
					if (!opts.raw) {
						data = opts.load(xhr.response);
					} else {
						data = xhr.response;
					}
				}

				return resolve(Object.assign({}, res(xhr), {
					data
				}), false);
			}

			return reject(res(xhr));
		});

		xhr.addEventListener(Events.ABORT, () => reject(res(xhr)));

		xhr.addEventListener(Events.ERROR, () => reject(res(xhr)));

		xhr.addEventListener(Events.TIMEOUT, () => reject(res(xhr)));

		opts.headers.forEach(header => {
			xhr.setRequestHeader(header, opts.headers[header]);
		});

		opts.events.forEach(event => {
			xhr.addEventListener(event, opts.events[event].bind(null, xhr), false);
		});

		const data = typeof opts.data === 'object' && !opts.raw ? opts.dump(opts.data) : opts.data;

		if (data !== undefined) {
			xhr.send(data);
		} else {
			xhr.send();
		}
	});
};

xr.assign = Object.assign;
xr.configure = configure;
xr.Methods = Methods;
xr.Events = Events;
xr.defaults = defaults;

xr.get = (url, params, args) => {
	return xr(Object.assign({
		url,
		method: Methods.GET,
		params
	}, args));
};
xr.put = (url, data, args) => {
	return xr(Object.assign({
		url,
		method: Methods.PUT,
		data
	}, args));
};
xr.post = (url, data, args) => {
	return xr(Object.assign({
		url,
		method: Methods.POST,
		data
	}, args));
};
xr.patch = (url, data, args) => {
	return xr(Object.assign({
		url,
		method: Methods.PATCH,
		data
	}, args));
};
xr.del = (url, args) => {
	return xr(Object.assign({
		url,
		method: Methods.DELETE
	}, args));
};
xr.options = (url, args) => {
	return xr(Object.assign({
		url,
		method: Methods.OPTIONS
	}, args));
};

export default xr;
