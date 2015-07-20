let res = function res(xhr) {
  return {
    status: xhr.status,
    response: xhr.response,
    xhr: xhr
  };
};

var getParams = function getParams(data, url) {
  var ret = [];
  for (var k in data) {
    ret.push('' + encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
  }
  if (url && url.split('?').length > 1) ret.push(url.split('?')[1]);
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

let configure = function configure(opts) {
  config = Object.assign({}, config, opts);
};

let xr = function xr(args) {
  return new Promise((resolve, reject) => {
    let opts = Object.assign({}, defaults, config, args);
    let xhr = opts.xmlHttpRequest();

    xhr.open(opts.method, opts.params ? `${opts.url.split('?')[0]}?` + getParams(opts.params) : opts.url, true);

    xhr.addEventListener(Events.LOAD, function() {
      return xhr.status >= 200 && xhr.status < 300 ? resolve(Object.assign({}, res(xhr), {
        data: xhr.response ? !opts.raw ? opts.load(xhr.response) : xhr.response : null
      }), false) : reject(res(xhr));
    });

    xhr.addEventListener(Events.ABORT, () => reject(res(xhr)));

    xhr.addEventListener(Events.ERROR, () => reject(res(xhr)));

    xhr.addEventListener(Events.TIMEOUT, () => reject(res(xhr)));

    for (let header in opts.headers) {
      xhr.setRequestHeader(header, opts.headers[header]);
    }
    for (let _event in opts.events) {
      xhr.addEventListener(_event, opts.events[_event].bind(null, xhr), false);
    }
    var data = typeof opts.data === 'object' && !opts.raw ? opts.dump(opts.data) : opts.data;

    data !== undefined ? xhr.send(data) : xhr.send();
  });
};

xr.assign = Object.assign;
xr.configure = configure;
xr.Methods = Methods;
xr.Events = Events;
xr.defaults = defaults;

xr.get = (url, params, args) => {
  return xr(Object.assign({
    url: url,
    method: Methods.GET,
    params: params
  }, args));
};
xr.put = (url, data, args) => {
  return xr(Object.assign({
    url: url,
    method: Methods.PUT,
    data: data
  }, args));
};
xr.post = (url, data, args) => {
  return xr(Object.assign({
    url: url,
    method: Methods.POST,
    data: data
  }, args));
};
xr.patch = (url, data, args) => {
  return xr(Object.assign({
    url: url,
    method: Methods.PATCH,
    data: data
  }, args));
};
xr.del = (url, args) => {
  return xr(Object.assign({
    url: url,
    method: Methods.DELETE
  }, args));
};
xr.options = (url, args) => {
  return xr(Object.assign({
    url: url,
    method: Methods.OPTIONS
  }, args));
};

export default xr;
