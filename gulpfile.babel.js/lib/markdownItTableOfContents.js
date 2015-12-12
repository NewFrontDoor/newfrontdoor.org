import string from 'string';
const defaults = {
	includeLevel: 6,
	containerClass: 'table-of-contents',
	slugify(str) {
		return string(str).slugify().toString();
	}
};

export default function (md, options) {
	options = Object.assign({}, defaults, options);
	const tocRegexp = /^\[\[toc\]\]/im;
	let gstate;

	function toc(state, silent) {
		let token;
		let match;

		while (state.src.indexOf('\n') >= 0 && state.src.indexOf('\n') < state.src.indexOf('[[toc]]')) {
			if (state.tokens.slice(-1)[0].type === 'softbreak') {
				state.src = state.src.split('\n').slice(1).join('\n');
				state.pos = 0;
			}
		}

		// Reject if the token does not start with [
		if (state.src.charCodeAt(state.pos) !== 0x5B) {
			return false;
		}
		// Don't run any pairs in validation mode
		if (silent) {
			return false;
		}

		// Detect TOC markdown
		match = tocRegexp.exec(state.src);
		match = match ? match.filter(m => m) : [];
		if (match.length < 1) {
			return false;
		}

		// Build content
		token = state.push('toc_open', 'toc', 1);
		token.markup = '[[toc]]';
		token = state.push('toc_body', '', 0);
		token = state.push('toc_close', 'toc', -1);

		// Update pos so the parser can continue
		const newline = state.src.indexOf('\n');
		if (newline === -1) {
			state.pos = state.pos + state.posMax + 1;
		} else {
			state.pos += newline;
		}

		return true;
	}

	md.renderer.rules.toc_open = function (tokens, index) {
		return '<div class="table-of-contents">';
	};

	md.renderer.rules.toc_close = function (tokens, index) {
		return '</div>';
	};

	md.renderer.rules.toc_body = function (tokens, index) {
		let cDepth = 1;

		const headings = gstate.tokens
			.map((token, i) => ({token, previous: gstate.tokens[i - 1]}))
			.filter(({token, previous}) => token.type === 'heading_close' && previous.type === 'inline')
			.map(({token, previous}) => ({
				content: previous.content,
				depth: parseInt(token.tag.substr(1, 1), 10)
			}))
			.map(({content, depth}) => ({depth, content: `<li><a href="#${options.slugify(content)}">${content}</a></li>`}))
			.map(({content, depth}) => {
				if (depth > cDepth) {
					cDepth = depth;
					return `<ul>${content}`;
				}

				if (depth < cDepth) {
					cDepth = depth;
					return `</ul>${content}`;
				}

				return content;
			});

		return `<ul>${headings.join('')}</ul>`;
	};

	// Catch all the tokens for iteration later
	md.core.ruler.push('grab_state', state => {
		gstate = state;
	});

	// Insert TOC
	md.inline.ruler.after('emphasis', 'toc', toc);
}
