import React from 'react';
import ReactDOM from 'react-dom';

import CardStack from '../components/cardStack.jsx'


export default class Slide1 extends React.Component {
	render() {
		return (
			<div>
					<h1 className="display-1">Projects</h1>
					<CardStack />
			</div>
		);
	}
};