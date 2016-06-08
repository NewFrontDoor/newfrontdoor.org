import React from 'react';

import {Hero} from '../components/Hero';
import {Index} from '../components/Index/index.jsx';
import content from '../content';

import {FeaturedHow} from '../components/Featured/feature-how';
import {FeaturedWho} from '../components/Featured/feature-who';
import {FeaturedTools} from '../components/Featured/feature-tools';
import {FeaturedEvents} from '../components/Featured/feature-events';
import {FeaturedPricing} from '../components/Featured/feature-pricing';
import {FeaturedJoin} from '../components/Featured/feature-join';

export const Home = () => (
	<Index headerSize="full" menuItems={content.mainmenu.links}>
		<Hero>
			<div dangerouslySetInnerHTML={{__html: content.hero.tagline}}></div>
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
