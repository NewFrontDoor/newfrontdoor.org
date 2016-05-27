import React from 'react';
import {Featured} from '../../components/Featured';
import styles from './feature-how.scss';

export const FeaturedHow = props => (
	<Featured name="how">
		<h2 className="text-slab">
			Sometimes all you need is a bit of direction.
		</h2>

		<p className="lead">
			We want you to put your best foot forward, so we're here to give you the tools, techniques and direction you need. Vision 100 IT exists to help churches - <em>particularly church IT volunteers and ministry staff</em> - to use IT better. Maybe you can relate to one of these people:
		</p>

		<div className={styles.examples}>
			<div className={styles.example}>
				<a href="#">
					<h3>Overwhelmed pastor.</h3>
					<span className="fa fa-plus-circle fa-2x"></span>
				</a>
				<p>
					You're a church leader in the 21st Century, and you've put together a fancy_church.blogspot.com page, but now you're wondering if no website is better than what you've got. The effort to get something professional up and running just seems too much amidst the weekly sermons and pastoral care. Who actually has time to sort through these IT things?
				</p>
			</div>
			<div className={styles.example}>
				<a href="#">
					<h3>"Voluntold" victim.</h3>
					<span className="fa fa-plus-circle fa-2x"></span>
				</a>
				<p>
					Being "asked" to put together a webpage for church because you're the youngest and most "savvy" member can be frustrating, and now you've landed the job of dragging your church into the brave new world of Facebook, Instagram, Content Management and Responsive Design. Your pastor sent you a link to awesome~church.com and wants a site just like it. Just wish you had a bit of support and some better tools?
				</p>
			</div>
			<div className={styles.example}>
				<a href="#">
					<h3>Capable. Over it.</h3>
					<span className="fa fa-plus-circle fa-2x"></span>
				</a>
				<p>
					You understand websites and servers and have managed to get something off the ground for church, but it's starting to cost you a bit too much and you're struggling to persuade the eldership that it's worth investing in a more rigorous approach to church IT. Wouldn’t it be great if all you had to worry about was keeping things up to date, rather than keeping it online as well?
				</p>
			</div>
		</div>
		<br/>
		<p>Vision 100 IT offers a suite of tools, services and training to allow you to utilise IT as an effective tool for ministry. We work collaboratively with your staff or designated church member to develop a tailored website and package of tools to keep your newcomers informed and your ministry teams connected. We provide assistance and training in best practices for tools you already use, and are open to exploring ways to combine your current approach and applications into our ecosystem.</p>
	</Featured>
)
