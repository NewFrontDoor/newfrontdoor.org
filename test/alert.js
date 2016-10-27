import test from 'ava';

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import Alert from '../src/components/alert/index.jsx';

test('', t => {
	const result = renderStatic();
	t.true(result);
});

function renderStatic(props) {
	return renderToStaticMarkup(<Alert {...props}/>);
}
