/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:toc
 * @fileoverview Generate a Table of Contents (TOC) for Markdown files.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

import slug from 'remark-slug';
import toString from 'mdast-util-to-string';

/*
 * Constants.
 */

const HEADING = 'heading';
const LIST = 'list';
const LIST_ITEM = 'listItem';
const PARAGRAPH = 'paragraph';
const LINK = 'link';
const TEXT = 'text';

/**
 * Search a node for a location.
 *
 * @param {Node} root - Parent to search in.
 * @param {RegExp} expression - Heading-content to search
 *   for.
 * @param {number} maxDepth - Maximum-depth to include.
 * @return {Object} - Results.
 */
function search(root, maxDepth) {
	let index = -1;
	const length = root.children.length;
	const map = [];
	let child;
	let value;

	while (++index < length) {
		child = root.children[index];

		if (child.type !== HEADING) {
			continue;
		}

		value = toString(child);

		if (value && child.depth <= maxDepth) {
			map.push({
				depth: child.depth,
				value,
				id: child.data.htmlAttributes.id
			});
		}
	}

	return map;
}

/**
 * Create a list.
 *
 * @return {Object} - List node.
 */
function list() {
	return {
		type: LIST,
		ordered: false,
		children: []
	};
}

/**
 * Create a list item.
 *
 * @return {Object} - List-item node.
 */
function listItem() {
	return {
		type: LIST_ITEM,
		loose: false,
		children: []
	};
}

/**
 * Insert a `node` into a `parent`.
 *
 * @param {Object} node - `node` to insert.
 * @param {Object} parent - Parent of `node`.
 * @param {boolean?} [tight] - Prefer tight list-items.
 */
function insert(node, parent, tight) {
	const children = parent.children;
	const length = children.length;
	const last = children[length - 1];
	let isLoose = false;
	let index;
	let item;

	if (node.depth === 1) {
		item = listItem();

		item.children.push({
			type: PARAGRAPH,
			children: [{
				type: LINK,
				title: null,
				url: `#${node.id}`,
				children: [{
					type: TEXT,
					value: node.value
				}]
			}]
		});

		children.push(item);
	} else if (last && last.type === LIST_ITEM) {
		insert(node, last, tight);
	} else if (last && last.type === LIST) {
		node.depth--;

		insert(node, last);
	} else if (parent.type === LIST) {
		item = listItem();

		insert(node, item);

		children.push(item);
	} else {
		item = list();
		node.depth--;

		insert(node, item);

		children.push(item);
	}

	/*
	 * Properly style list-items with new lines.
	 */

	if (parent.type === LIST_ITEM) {
		parent.loose = tight ? false : children.length > 1;
	} else {
		if (tight) {
			isLoose = false;
		} else {
			index = -1;

			while (++index < length) {
				if (children[index].loose) {
					isLoose = true;

					break;
				}
			}
		}

		index = -1;

		while (++index < length) {
			children[index].loose = isLoose;
		}
	}
}

/**
 * Transform a list of heading objects to a markdown list.
 *
 * @param {Array.<Object>} map - Heading-map to insert.
 * @param {boolean?} [tight] - Prefer tight list-items.
 * @return {Object} - List node.
 */
function contents(map, tight) {
	let minDepth = Infinity;
	let index = -1;
	const length = map.length;

	/*
	 * Find minimum depth.
	 */

	while (++index < length) {
		if (map[index].depth < minDepth) {
			minDepth = map[index].depth;
		}
	}

	/*
	 * Normalize depth.
	 */

	index = -1;

	while (++index < length) {
		map[index].depth -= minDepth - 1;
	}

	/*
	 * Construct the main list.
	 */

	const table = list();

	/*
	 * Add TOC to list.
	 */

	index = -1;

	while (++index < length) {
		insert(map[index], table, tight);
	}

	return table;
}

/**
 * Attacher.
 *
 * @param {Remark} remark - Processor.
 * @param {Object} options - Configuration.
 * @return {function(node)} - Transformmer.
 */
function attacher(remark, {maxDepth = 6, tight, slugOptions} = {}) {
	remark.use(slug, slugOptions);

	/**
	 * Adds an example section based on a valid example
	 * JavaScript document to a `Usage` section.
	 *
	 * @param {Node} node - Root to search in.
	 */
	function transformer(node) {
		const result = search(node, maxDepth);

		if (!result.length) {
			return;
		}

		/*
		 * Add markdown.
		 */

		node.children = [contents(result, tight)];
	}

	return transformer;
}

export default attacher;
