import React from 'react';
import ReactDOM from 'react-dom';

import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';

import Button from '../components/buttons.jsx'

const start = <div><div className="part1">Hi there, my Name is David</div> <div className="part2"> and I would love to build your website!</div></div>

const message1 = <div><div className="part1">I spezialized in web animations </div> <div className="part2"> but also got experience in other parts of webdevelopment.</div></div>

const introduction = <div><div className="part1">You just discovered my little portfolio.</div> <div className="part2">Here you&#39;ll see some of my past projects and skills.</div></div>

const hireMe = <div><div className="part1">I hope you enjoy what you see and if you would like to work with me just contact me at the end of the page.</div></div>

function moveAnimation({target}) {
	const test1 = target.find({className: 'part1'})
	const test2 = target.find({className: 'part2'})
  	return (
  		new TimelineMax({})
  		.set(test1,{force3D:false})
  		.set(test2,{force3D:false})
  		.from(test1, 1, {autoAlpha:0})
  		.from(test2, 1, {autoAlpha:0}, "-=0.5")
  		.add('end')
		
  	)
};

function moveAnimation1({target}) {
	const test1 = target.find({className: 'part1'})
	const test2 = target.find({className: 'part2'})
  	return (
  		new TimelineMax({})
  		.set(test1,{force3D:false})
  		.set(test2,{force3D:false})
  		.from(test1, 1, {y: "-1000"})
  		.from(test2, 1, {y:"2000"}, "-=0.5")
  		.add('end')
		
  	)
};

function moveAnimation2({target}) {
	const test1 = target.find({className: 'part1'})
	const test2 = target.find({className: 'part2'})
  	return (
  		new TimelineMax({})
  		.set(test1,{force3D:false})
  		.set(test2,{force3D:false})
  		.from(test1, 1, {x: "-=1000"})
  		.from(test2, 1, {x:"+=2000"}, "-=0.5")
  		.add('end')
		
  	)
};

class Slide0 extends React.Component {
	constructor(props) {
		super(props);

		CSSPlugin.defaultForce3D = false;

		this.state = {
			text: start,
			status: 0
		};

		this.changeText = this.changeText.bind(this);
		this.functionWrapper = this.functionWrapper.bind(this);
	}
	componentDidMount() {
		this.addAnimation(moveAnimation)
	}
	changeText(e) {
		const status = this.state.status
		const text = this.state.text;
		if(status == 0) {
			return (
				this.setState({text: message1}),
				this.setState({status: 1}),
				this.addAnimation(moveAnimation2)
			)
		} else if(status == 1) {
			return (
				this.setState({text: introduction}),
				this.setState({status: 2}),
				this.addAnimation(moveAnimation)
			)

		}else if(status == 2) {
			return (
				this.setState({text: hireMe}),
				this.setState({status: 3}),
				this.addAnimation(moveAnimation1)
			)
		}
		else if(status == 3) {
			return (
				this.setState({text: start}),
				this.setState({status: 0}),
				this.addAnimation(moveAnimation1)
			)
		}
	}
	functionWrapper() {
		this.changeText
	}

	render() {
		return (
				<div>
					<div className="startAnimation">
						<div className="text-center">
							<h1 className="display-1">{this.state.text}</h1>
						</div>
					</div>
					
					<div className="text-center bottom-80">
						<Button onClick={this.changeText} unpressedText="Next" pressedText="Next"></Button>
					</div>
				</div>
		);
	}
};

const GSAPTest = GSAPEnh(Slide0)
export default GSAPTest;
