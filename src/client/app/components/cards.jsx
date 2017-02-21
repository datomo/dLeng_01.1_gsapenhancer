import React from 'react';
import ReactDOM from 'react-dom';

import GSAP from 'gsap';
import GSAPEnh from 'react-gsap-enhancer';


function showClose({target}) {
	const button = target.find({className: 'close-button'})
  	return (
  		new TimelineMax({repeat:-1, yoyo:true})
  		.from(button, 3, {scaleX: 2, autoAlpha: 1})
		
  	)
};

class Card extends React.Component {
	
	componentDidMount() {
		
	}
	render() {
		return (
				<div className="card" id={this.props.id} >
    				<div className="card-img-wrapper">
    					<img className="card-img-top" src={"public/" +this.props.imgLink} alt="Card image cap" />
    				</div>

    				<div className="card-block">
				      	<h3 className="card-title">{this.props.title}</h3>
    				</div>
  				</div>
  		)
	}
};

const GSAPTest = GSAPEnh(Card)
export default GSAPTest;

