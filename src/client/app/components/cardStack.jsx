import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards.jsx';

import GSAP from 'gsap';
import GSAPEnh from 'react-gsap-enhancer';

const longText = "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."

function animLeft({target}) {
	const card = target.find({id: "cardLeft"})
  	return (
  		new TimelineMax({})
  		.set(card,{zIndex: 4})
  		.to(card, 0.5, {css:{width: "80vw", height: "60vh"}, transformOrigin: "0 0"})
		
  	)
};

function animCenter({target}) {
	const card = target.find({id: "cardCenter"})
  	return (
  		new TimelineMax({})
  		.set(card,{zIndex: 4})
  		.to(card, 0.5, {css:{width: "80vw", height: "60vh", left: "0%"}, transformOrigin: "0 0"})
  	)
};

function animRight({target}) {
	const card = target.find({id: "cardRight"})
	const clickable = document.getElementsByClassName("card-text-long")
  	return (
  		new TimelineMax({})
  		.set(card,{zIndex: 4})
  		.to(card, 0.5, {css:{width: "80vw", height: "60vh", left: "0%"}, transformOrigin: "0 0"})
		
  	)
};

class CardStack extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<div className="card-stack">
				<div className="clickable" onClick={() => this.addAnimation(animLeft)}>
					<Card className="cardNormal" id="cardLeft" title="refallschwil.ch" longText={longText}/>
				</div>
				<div className="clickable" onClick={() => this.addAnimation(animCenter)}>
					<Card className="cardNormal" id="cardCenter" title="Prototype Portfolio" longText={longText}/>
				</div>
				<div className="clickable" onClick={() => this.addAnimation(animRight)}>
					<Card className="cardNormal" id="cardRight" title="sprungbraett-festival.ch" longText={longText}/>
				</div>
				
			</div>	
		);
	}
};


const GSAPTest = GSAPEnh(CardStack)
export default GSAPTest;

