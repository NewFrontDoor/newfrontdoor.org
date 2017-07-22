import React from 'react';

import Hero from '../components/hero/index.js';
import Index from '../components/index/index.js';
import content from '../content';
import {Markdown} from '../components/markdown/index.js';

import FeaturedHow from '../components/featured/feature-how.js';
import FeaturedWho from '../components/featured/feature-who.js';
import FeaturedTools from '../components/featured/feature-tools.js';
import FeaturedEvents from '../components/featured/feature-events.js';
import FeaturedPricing from '../components/featured/feature-pricing.js';
import FeaturedJoin from '../components/featured/feature-join.js';

const remarkConfig = {
	remarkReactComponents: {
		h1: 'h1'
	}
};

const Home = () => (
	<Index headerSize="full" menuItems={content.mainmenu.links}>
		<Markdown component={Hero} remarkConfig={remarkConfig}>
			{content.hero.tagline}
		</Markdown>
		<main role="main">
			<FeaturedHow/>
			<FeaturedWho/>
			<FeaturedTools/>
			<FeaturedEvents/>
			<FeaturedPricing/>
			<FeaturedJoin/>
		</main>
	</Index>
);

export default Home;
