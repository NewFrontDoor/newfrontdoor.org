import React from 'react';
import {MiniHero} from './MiniHero';

export class Blog extends React.Component {
	constructor() {
		super();

		const lead = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.';
		const body = `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

		Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.

		Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`;

		this.state = {
			posts: [{
				title: 'This is where the first big image and quote will go',
				date: new Date(2015, 0, 1),
				lead,
				body
			}, {
				title: 'Who are Vision 100 IT?',
				date: new Date(2014, 0, 1),
				lead,
				body
			}, {
				title: 'How we can help you',
				date: new Date(2013, 0, 1),
				lead,
				body
			}, {
				title: 'Philosophy + tools',
				date: new Date(2013, 0, 1),
				lead,
				body
			}, {
				title: 'Events',
				date: new Date(2013, 0, 1),
				lead,
				body
			}, {
				title: 'Pricing',
				date: new Date(2013, 0, 1),
				lead,
				body
			}, {
				title: 'Come on board',
				date: new Date(2012, 0, 1),
				lead,
				body
			}]
		};
	}
	render() {
		return (
<div>
		<MiniHero></MiniHero>
		<main role="main">
		<div className="site-wrapper">
			<section className="announcement-banner">
				<div></div>
			</section>
			<section className="pinned-post">
				<section className="post">
					<header className="post-header">
						<h2 className="post-title">New Vision 100 IT website!</h2>
						<p className="post-meta">By <a href="#" className="post-author">AR</a> on <span className="post-date">3rd March, 2015</span> under <a className="post-category">Announcements</a></p>
					</header>
					<div className="post-description">
						<p>As you can probably tell, Vision 100 IT now has it's own special home on the web. If you're not viewing this post in situ, head to <a href="#">Vision 100 IT</a> and check it out</p>
						<p>There are ponies and ice-cream cakes, as well as lots of fairy bread and cocktail sausages there. In fact it's just like a primary school birthday party</p>
						<p>There is also a bunch of serious stuff like documentation, feature and support request forms, a blog (which you're reading) and some product page info for you to peruse.</p>
						<p>Check it out at <a href="#">Vision 100 IT website placeholder!</a></p>
					</div>
				</section>
			</section>
			<section className="posts">
				<section className="post">
					<header className="post-header">
						<h2 className="post-title">High Quality images to use for Sermon Series, Website Banners and other purposes</h2>
						<p className="post-meta">By <a href="#" className="post-author">CdK</a> under <a className="post-category">Images</a></p>
					</header>
					<div className="post-description">
						<p>As a team helping small churches without the funds to do high quality photography, we're always on the lookout for high quality images that churches can use for their sermon series backgrounds or camp brochures or website backgrounds.</p>
						<p>Sources like flickr.com often are hard to search through and just using Google Image Search can often lead to you unwittingly breaking copyright law as these are not considered fair use exemptions.</p>
						<p>Unsplash is a great resource for visual imagery, particularly as it focuses on nature photography, and all images on the site are high resolution and able to be used for whatever you want.  We're particularly impressed by the fact that these images often leave plenty of space to put text (like Sermon Series titles), so it's well worth a look.</p>
						<p>Check it out at <a href="http://unsplash.com/">'http://unsplash.com'</a>.</p>
					</div>
				</section>
				<section className="post">
					<header className="post-header">
						<h2 className="post-title">Exporting Running Sheets from Elvanto to Excel</h2>
						<p className="post-meta">By <a className="post-author" href="#">CdK</a> under <a className="post-category">Elvanto</a></p>
					</header>
					<div className="post-description">
						<p>At a recent IT training night talking about Elvanto, a question arose about being able to export running sheets to Excel.</p>
						<p>The basic problem is that Elvanto's running sheet format is quite rigid, and it's difficult to do things like put the Bible reading next to the person doing the Bible reading.</p>
						<p>While there isn't an officially supported way to do this, there is a way to export a running sheet in Elvanto and then modify it in Excel.</p>
						<p>In order to achieve this, print the running sheet, and in the top left, choose "Web Page" in Output.  Choose all the options you normally would and then click print.  At this point, you should have a web page opened in the browser with the running sheet showing.  You'll then need to right-click anywhere on the page and choose "Save As..." (in Chrome, in other browsers, could be something like Save Page As..), then save the page to a known location, like your Desktop or My Documents.</p>
						<p>After that, open Excel and choose  "Open..", choosing the file you saved in the previous step.  You may get a warning about a missing file, which you can safely ignore, but from there, you can move things around, change the format, add or delete rows as you need, and then print it.</p>
						<p>This will also work with Word, in which case the last step should be to open the file in Word instead of Excel.</p>
					</div>
				</section>
				<section className="post">
					<header className="post-header">
						<h2 className="post-title">Event Registration now live for Challenge Conference</h2>
						<p className="post-meta">By <a className="post-author" href="#">CdK</a> under <a className="post-category">Features</a></p>
					</header>
					<div className="post-description">
						<p>Over the last few months, we've been developing a registration process for the Challenge Conference that we're now able to roll out across all the different events that Vision 100 run.</p>
						<p>This registration process allows people to register for events, pay through Paypal, receive confirmation emails when payment has been received, and also allows you track payments made, supplying direct deposit references for you to cross reference, and even allowing for automatic emails to registrants when their direct deposits have been paid.</p>
						<p>This process takes a lot of hassle out of collecting money for events, and online registrations means that people who are thinking of coming require a lot less action to make it happen.  We think it'd be ideal for church camps, events and other things that churches need people to register for.</p>
						<p>If you want us to roll this out for you when your events are happening, let us know at <a href="mailto:it@vision100.org">it@vision100.org</a></p>
					</div>
				</section>
				<section className="post">
					<header className="post-header">
						<h2 className="post-title">New Vision 100 IT Philosophy - Update</h2>
						<p className="post-meta">By <a className="post-author" href="#">CdK</a> under <a className="post-category">Philosophy</a></p>
					</header>
					<div className="post-description">
						<p>Last November the Vision 100 IT Team 'board' (Christian de Kievit, Mikey Lynch, Jason Imms and Alan Reader) went away for a night and a day to think through what is in store for the future of Vision 100 IT.</p>
						<p>There was lots of coffee, unhealthy snacks and we filled a whiteboard with Mikey's illegible handwriting ten times over. Out the end we figured out a way forward for the Vision 100 IT Team. We believe we are doing something unique that can serve not only The Vision 100 Network, but churches and ministries across Tasmania and Australia!</p>
						<p>Some important objectives for the Vision 100 IT Team were discussed:</p>
						<ol>
						<li>We were able to really clarify what we are really good at and passionate about as the Vision 100 IT team
						<ol>
						<li>We are passionate about philosophy of use, not just about providing a 'product', but training churches to use IT really well for the ministry of the gospel.</li>
						<li>We are uniquely equipped to help small churches and ministries that don't have the people or the money to provide top quality, sustainable IT.</li>
						<li>We are committed to mobilising a network of IT volunteers in churches to serve a wider network of churches.</li>
						</ol>
						</li>
						<li>What we are hoping and praying to do next
						<ol>
						<li>We want to begin working really really hard to train in our IT philosophy every chance we get: in our emails, IT Team Sprints, Training Nights and over social media.</li>
						<li>We want to tighten up our systems and core services (such as perfecting modules for websites, setting up smooth event registration and payment) so that we can be super efficient and deliver really awesome stuff for churches in a shorter time frame.</li>
						<li>We are gathering financial support to enable us to employ a 'Client Manager' 2-3 days a week to help us find more churches we can serve, and help us serve our existing churches better.</li>
						<li>Improve the quality and professionalism of our biannual IT Training Nights - covering topics like 'Church Database Software' and 'Using Social Media Well'.</li>
						<li>Start running quarterly Client Orientation Sessions to equip ministry leaders in our churches know how to use the basic IT stuff, like upload sermons on their website, or add people to the mailing list.</li>
						</ol>
						</li>
						<li>We also dreamed about other things we could do
						<ol>
						<li>Producing an app that could allow different churches to pull in information from all the different missionaries and organisations that they support to help them best support them in an integrated way.</li>
						<li>Eventually organising a National Church IT Conference.</li>
						<li>Providing a basic portable AV pack for church conferences to make it easy for them to do powerpoint, sound and sermon recording.</li>
						<li>Help churches get access to really good graphic design and video design from volunteers and Christian design companies - and help them communicate really productively with these designers to get what will help the church without burning out designers in the process.</li>
						</ol>
						</li>
						</ol>
						<p>A lot has changed in the last 12 months, but we're still excited about the opportunities that this vision presents. Some of these things have happened and our IT Training nights are a high quality presentation, and useful for churches. We've also made a lot of progress on moving towards having a "Client Manager".</p>
						<p>If you want to know any more about what we're trying to do with Vision 100 IT, or for any other reason, let us know at <a href="mailto:it@vision100.org">it@vision100.org</a>.</p>
					</div>
				</section>
			</section>
			<div>
			</div>
		</div>
	</main>
	</div>
	);
	}
}
