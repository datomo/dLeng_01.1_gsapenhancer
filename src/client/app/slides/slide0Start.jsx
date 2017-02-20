import React from 'react';
import ReactDOM from 'react-dom';
import SplitText from '../vendor/utils/SplitText.min.js';

import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';


const part1 = "Hi there, my Name is David and I would love to build your website!"
const part2 = "I spezialized in web animations but also got experience in other parts of webdevelopment."
const part3 = "You just discovered my little portfolio. Here you'll see some of my past projects and skills."
const part4 = "I hope you enjoy what you see and if you would like to work with me just contact me at the end of the page."

function moveAnimation({target}) {
	const part1 = target.find({id: 'part1'})
	const mySplitText1 = new SplitText(part1, {type:"words,chars, lines"}) 
    const lines1 = mySplitText1.lines; 
	const part2 = target.find({id: 'part2'})
	const mySplitText2 = new SplitText(part2, {type:"words,chars, lines"}) 
    const lines2 = mySplitText2.chars; 
	const part3 = target.find({id: 'part3'})
	const mySplitText3 = new SplitText(part3, {type:"words,chars, lines"}) 
    const lines3 = mySplitText3.lines; 
	const part4 = target.find({id: 'part4'})
	const mySplitText4 = new SplitText(part4, {type:"words,chars, lines"}) 
    const lines4 = mySplitText4.chars; 
	const duration = 3
  	return (
  		new TimelineMax({})
  		
  		.add('start')
  		.staggerFrom(lines1, 1, {autoAlpha:0, x: 100}, 0.5, "+=0")
  		.to(part1, 1, {autoAlpha:0, delay: duration})
  		.set(part2,{perspective: 600})
  		.staggerFrom(lines2, 1, {autoAlpha:0, rotationX:80, y: 100}, 0.01, "+=0")
  		.to(part2, 1, {autoAlpha:0, delay: duration})
  		.staggerFrom(lines3, 1, {autoAlpha:0, y: -100}, 0.5, "+=0")
  		.to(part3, 1, {autoAlpha:0, delay: duration})
  		.staggerFrom(lines4, 1, {autoAlpha:0, scale:0, force3D: false}, 0.02, "+=0")
  		.add('end')
		
  	)
};

class Slide0 extends React.Component {
	constructor(props) {
		super(props);

		this.restartAnimation = this.restartAnimation.bind(this);
	}
	componentDidMount() {
		this.runningAnim =this.addAnimation(moveAnimation)
	}
	restartAnimation(e) {
		this.runningAnim.restart()
	}
	render() {
		return (
				<div className="slide-container">
					<div className="startAnimation">
						<div className="text-center startAnimaiton">
							<p className="part text-center display-1" id="part1">{part1}</p>
							<p className="part text-center display-1" id="part2">{part2}</p>
							<p className="part text-center display-1" id="part3">{part3}</p>
							<p className="part text-center display-1" id="part4">{part4}</p>
						</div>
					</div>
					<div className="text-center bottom-80">
						<button onClick={this.restartAnimation}>Restart</button>
					</div>
				</div>
		);
	}
};

const GSAPTest = GSAPEnh(Slide0)
export default GSAPTest;
