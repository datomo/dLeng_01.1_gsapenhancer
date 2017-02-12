import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards.jsx';


export default class CardStack extends React.Component {
	render() {
		return (
			<div className="card-stack">
				<Card id="cardLeft"
					onMouseEnter= {() => this.animCard.tweenTo('hovered')}
					onMouseLeave= {() => this.animCard.tweenTo('start')}/>
				<Card id="cardCenter"
					onMouseEnter= {() => this.animCard.tweenTo('hovered')}
					onMouseLeave= {() => this.animCard.tweenTo('start')}/>
				<Card id="cardRight"
					onMouseEnter= {() => this.animCard.tweenTo('hovered')}
					onMouseLeave= {() => this.animCard.tweenTo('start')}/>
			</div>	
		);
	}
};

