import test from 'ava';
import remark from 'remark';
import toc from './toc';

test('', t => {
	const content = remark().use(toc, {tight: true}).process(`
# Alpha

## Bravo

### Charlie

## Delta
`).toString();

	t.is(content, `-   [Alpha](#alpha)\n    -   [Bravo](#bravo)\n\n        -   [Charlie](#charlie)\n\n    -   [Delta](#delta)\n`);
});
