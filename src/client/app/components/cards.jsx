import React from 'react';
import ReactDOM from 'react-dom';

import GSAP from 'gsap';
import GSAPEnh from 'react-gsap-enhancer';

function expandCard({target}) {
	const card = target.find({className: 'card-img-wrapper'})
  	return (
  		new TimelineMax({repeat:-1, yoyo:true})
  		.from(card, 3, {scaleX: 2, transformOrigin: "left center"})
		
  	)
};

class Card extends React.Component {
	componentDidMount() {
		
	}
	render() {
		return (
				<div className="card" id={this.props.id} >
    				<div className="card-img-wrapper">
    					<img className="card-img-top" src="http://placehold.it/400x400" alt="Card image cap" />
    					<div className="shadow-fix"></div>
    				</div>

    				<div className="card-block">
				      	<h4 className="card-title">{this.props.title}</h4>
				      	<p className="card-text card-text-long">{this.props.longText}</p>
				    	<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    				</div>
  				</div>
  		)
	}
};

const GSAPTest = GSAPEnh(Card)
export default GSAPTest;

