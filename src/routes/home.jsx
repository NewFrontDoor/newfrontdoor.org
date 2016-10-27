import React from 'react';

import Hero from '../components/hero/index.jsx';
import Index from '../components/index/index.jsx';
import content from '../content';

import FeaturedHow from '../components/featured/feature-how.jsx';
import FeaturedWho from '../components/featured/feature-who.jsx';
import FeaturedTools from '../components/featured/feature-tools.jsx';
import FeaturedEvents from '../components/featured/feature-events.jsx';
import FeaturedPricing from '../components/featured/feature-pricing.jsx';
import FeaturedJoin from '../components/featured/feature-join.jsx';

const Home = () => (
	<Index headerSize="full" menuItems={content.mainmenu.links}>
		<Hero>
			<div dangerouslySetInnerHTML={{__html: content.hero.tagline}}/>
		</Hero>
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
