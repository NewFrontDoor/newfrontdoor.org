import React from 'react';

import {Hero} from '../components/hero';
import {Index} from '../components/index/index.jsx';
import content from '../content';

import {FeaturedHow} from '../components/featured/feature-how';
import {FeaturedWho} from '../components/featured/feature-who';
import {FeaturedTools} from '../components/featured/feature-tools';
import {FeaturedEvents} from '../components/featured/feature-events';
import {FeaturedPricing} from '../components/featured/feature-pricing';
import {FeaturedJoin} from '../components/featured/feature-join';

export const Home = () => (
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
