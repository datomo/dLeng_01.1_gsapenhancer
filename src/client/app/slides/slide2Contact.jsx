import React from 'react';
import ReactDOM from 'react-dom';

import gsap from 'gsap';
import GSAPEnh from 'react-gsap-enhancer';

import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

var controller2 = new ScrollMagic.Controller();

class Slide2 extends React.Component {
	componentDidMount() {
		
		let el2 = document.getElementById("title-slide02")
		let tween2 = TweenMax.from(el2, 0.5, {left: -300})
		
		var scene = new ScrollMagic.Scene({
									triggerElement: document.getElementById("trigger2")
								})
								.setTween(tween2)
								.addIndicators()
								.addTo(controller2);
	}
	render() {
		return (
				<div>
					<div id="trigger2" className="spacer s1"></div>
					<h1 id="title-slide02" className="display-1 animation">Contact</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut convallis eros, eget imperdiet leo. Aliquam tincidunt justo in dui ultrices, in tempor ligula volutpat. Ut sed placerat purus. Nam congue vulputate vehicula. Curabitur suscipit purus quis tellus semper scelerisque. Morbi eleifend mauris sit amet eros iaculis, et fermentum dui tincidunt. Maecenas tempor tellus in eros auctor egestas. Aliquam non euismod arcu, a consequat nisi. Nunc bibendum diam vel massa auctor, et condimentum augue pharetra. Quisque convallis risus nunc, id porttitor nisi ultricies id. In hac habitasse platea dictumst. Duis sit amet euismod diam, quis viverra tortor. Cras venenatis est purus, quis egestas lacus porta id.
					</p>
				</div>
		);
	}
};



const GSAPWrapped = GSAPEnh(Slide2)
export default GSAPWrapped;