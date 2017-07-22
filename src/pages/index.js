import React from 'react';

import Hero from '../components/hero/index';
import Index from '../components/index/index';
import content from '../content';
import {Markdown} from '../components/markdown/index';

import FeaturedHow from '../components/featured/feature-how';
import FeaturedWho from '../components/featured/feature-who';
import FeaturedTools from '../components/featured/feature-tools';
import FeaturedEvents from '../components/featured/feature-events';
import FeaturedPricing from '../components/featured/feature-pricing';
import FeaturedJoin from '../components/featured/feature-join';

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
