import React from 'react';
import ReactDOM from 'react-dom';

import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';
import * as ScrollMagic from 'scrollmagic';

import CardStack from '../components/cardStack.jsx'


function animStart({target}) {
	const test = target.find({id: 'title-slide01'})
  	return (
  		new TweenMax
  		.set(test, {x: -300})
  		
		
  	)
};


	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
									triggerElement: this.find({id: 'title-slide01'})
								})
								.setTween("#title-slide01", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
								.addTo(controller);



class Slide1 extends React.Component {
	componentDidMount() {
		/*this.animStart = this.addAnimation(animStart)*/
	}
	render() {
		return (
			<div>
				<div id="trigger1" className="spacer s1"></div>
				<h1 id ="title-slide01" className="display-1 child-container">Projects</h1>
				<CardStack />
			</div>
		);
	}
};

const GSAPTest = GSAPEnh(Slide1)
export default GSAPTest;