import React from 'react';

import Hero from '../components/hero/index.jsx';
import Index from '../components/index/index.jsx';
import content from '../content';
import {Markdown} from '../components/markdown/index.jsx';

import FeaturedHow from '../components/featured/feature-how.jsx';
import FeaturedWho from '../components/featured/feature-who.jsx';
import FeaturedTools from '../components/featured/feature-tools.jsx';
import FeaturedEvents from '../components/featured/feature-events.jsx';
import FeaturedPricing from '../components/featured/feature-pricing.jsx';
import FeaturedJoin from '../components/featured/feature-join.jsx';

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
