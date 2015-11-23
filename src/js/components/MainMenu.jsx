import React from 'react';

export class MainMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				links: [{
					text: 'How we can help you'
				}, {
					text: 'Who are Vision 100 IT?'
				}, {
					text: 'Philosophy + Tools'
				}, {
					text: 'Events'
				}, {
					text: 'Pricing'
				}, {
					text: 'Come on board'
				}]
		};
	}
	render() {
		return (
		    <div className="main-menu">
		      <ul>
		        <li className="search-box text-uppercase">
		          <h3><a href="#"><i className="fa fa-search fa-lg"></i><div hidden>Search</div></a></h3>
		        </li>


						{this.state.links.map((link, key) =>
							<li className="main-menu-item text-uppercase"><h3 key={key}><a href="#">{link.text}</a></h3></li>
						)}


		      </ul>
		    </div>
			);
	}
}
