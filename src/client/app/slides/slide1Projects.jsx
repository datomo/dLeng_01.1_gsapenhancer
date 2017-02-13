import React from 'react';
import ReactDOM from 'react-dom';


import CardStack from '../components/cardStack.jsx'


export default class Slide1 extends React.Component {
	componentDidMount() {
		/*this.animStart = this.addAnimation(animStart)*/
	}
	render() {
		return (
			<div>
				<h1 id ="title-slide01"  className="display-1 child-container">Projects</h1>
				<CardStack />
			</div>
		);
	}
};
