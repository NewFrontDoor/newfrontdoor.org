import React from 'react';
import Waypoint from 'react-waypoint';
import styles from './Home.scss';

import {Hero} from '../../components/Hero';
import {Index} from '../../components/Index/index.jsx';
import {Featured} from '../../components/Featured';
import content from '../../content';

import {FeaturedHow} from './feature-how';
import {FeaturedWho} from './feature-who';
import {FeaturedTools} from './feature-tools';
import {FeaturedEvents} from './feature-events';
import {FeaturedPricing} from './feature-pricing';
import {FeaturedJoin} from './feature-join';

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
