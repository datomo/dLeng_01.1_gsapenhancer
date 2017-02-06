import React from 'react';
import ReactDOM from 'react-dom';

import jQuary from 'jquery';
import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';


import styles from '../styles/index.js';

function moveAnimation({target}) {
	const test = target.find({className: 'display-1'})
  	return new TimelineMax({repeat:-1})
  					.from(test, 3, {x:-500})
}

class Slide0 extends React.Component {
	componentDidMount() {
		this.addAnimation(moveAnimation)
	}
	render() {
		return (
				<div>
					<h1 className="display-1">d-leng.com</h1>
				</div>
		);
	}
};

const GSAPTest = GSAPEnh(Slide0)
export default GSAPTest;