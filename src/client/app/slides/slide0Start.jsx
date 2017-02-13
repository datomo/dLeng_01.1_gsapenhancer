import React from 'react';
import ReactDOM from 'react-dom';

import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';

import Button from '../components/buttons.jsx'

const start = "Hi, there my Name is David and I would love to build your website!"

const message2 = "I spezialized in web animaitons but also got experience in different parts of webdevelopment."

function moveAnimation({target}) {
	const test = target.find({className: 'display-1'})
  	return (
  		new TimelineMax({})
  		.set(test,{force3D:false})
  		.from(test, 1, {scale:2})
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
				this.setState({text: message2}),
				this.setState({status: 0}),
				this.addAnimation(moveAnimation)
			)
		} else if(status == 1) {
			return (
				this.setState({text: "du"}),
				this.setState({status: 2}),
				this.addAnimation(moveAnimation)
			)

		}else if(status == 2) {
			return (
				this.setState({text: "Lauch"}),
				this.setState({status: 3}),
				this.addAnimation(moveAnimation)
			)
		}
		else if(status == 3) {
			return (
				this.setState({text: start}),
				this.setState({status: 0}),
				this.addAnimation(moveAnimation)
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
						<Button onClick={this.changeText} unpressedText="Next" pressedText="Back"></Button>
					</div>
				</div>
		);
	}
};

const GSAPTest = GSAPEnh(Slide0)
export default GSAPTest;
