import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards.jsx'

export default class CardStack extends React.Component {
	render() {
		return (
			<div className="card-stack">
				<Card id="cardLeft"/>
				<Card id="cardCenter"/>
				<Card id="cardRight"/>
			</div>	
		);
	}
};