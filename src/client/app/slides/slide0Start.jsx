import React from 'react';
import ReactDOM from 'react-dom';

import jQuary from 'jquery';
import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';

import Button from '../components/buttons.jsx'


function moveAnimation({target}) {
	const test = target.find({className: 'display-1'})
  	return (
  		new TimelineMax({repeat:-1, yoyo:true})
  		.set(test,{force3D:false})
  		.from(test, 3, {scale: 0.2})
		
  	)
};

class Slide0 extends React.Component {
	constructor(props) {
		super(props);

		CSSPlugin.defaultForce3D = false;

		this.state = {
			name: "Hello"
		};

		this.changeText = this.changeText.bind(this);
	}
	componentDidMount() {
		this.addAnimation(moveAnimation)
	}
	changeText(e) {
		const name = this.state.name;
		if(name == "Hello") {
			return this.setState({name:"d-leng.com"})
		} else {
			return this.setState({name:"Hello"})

		}
	}
	render() {
		return (
				<div>
					<div className="text-center">
						<h1 className="display-1">{this.state.name}</h1>
					</div>
					
					<div className="placeholder-10"></div>
					<div className="text-center">
						<Button onClick={this.changeText} unpressedText="DONT PRESS THAT BUTTON" pressedText="silly you"></Button>
					</div>
				</div>
		);
	}
};

const GSAPTest = GSAPEnh(Slide0)
export default GSAPTest;
