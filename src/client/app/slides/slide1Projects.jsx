import React from 'react';
import ReactDOM from 'react-dom';

import gsap from 'gsap';
import GSAPEnh from 'react-gsap-enhancer';

import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import CardStack from '../components/cardStack.jsx'

	
var controller = new ScrollMagic.Controller();


class Slide1 extends React.Component {
	componentDidMount() {
		/*this.animStart = this.addAnimation(animStart)*/
		var el = document.getElementById("title-slide01")
		var cards = document.getElementsByClassName("card")

		let tween = new TimelineMax()
							.from(el, 1, {x: -300}, "start")
							.from(cards, 0.5, {scale: 0.2}, "start");

		let tween2 = new TimelineMax()
							.to(el, 1, {x: -300}, "start")
							.to(cards, 0.5, {scale: 0.2}, "start");

		var scene = new ScrollMagic.Scene({
									triggerElement: document.getElementById("trigger1"),
									offset:0,
								})
								.setTween(tween)
								.addIndicators()
								.addTo(controller);

		var scene2 = new ScrollMagic.Scene({
									triggerElement: document.getElementById("trigger2"),
									offset: 100,
								})
								.setTween(tween2)
								.addIndicators()
								.addTo(controller);
	}
	render() {
		return (
			<div>
				<div id="trigger1" className="spacer s1 top"></div>
				<h1 id ="title-slide01"  className="display-1 child-container">Projects</h1>
				<div className="placeholder-10"></div>
				<CardStack />
				<div id="trigger2" className="spacer s1 bottom"></div>
			</div>
		);
	}
};

const GSAPWrapped = GSAPEnh(Slide1)
export default GSAPWrapped;
