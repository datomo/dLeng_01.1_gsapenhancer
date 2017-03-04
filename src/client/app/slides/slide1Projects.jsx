import React from 'react';
import ReactDOM from 'react-dom';


import CardStack from '../components/cardStack.jsx';

import ProjectContainer from '../container/projectContainer.jsx';

export default class Slide1 extends React.Component {
	componentDidMount() {
		/*this.animStart = this.addAnimation(animStart)*/
	}
	render() {
		return (
			<div className="slide-project">
				<CardStack />
			</div>
		);
	}
};
