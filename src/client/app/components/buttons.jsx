import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
	render() {
		return (
			<div>
				<button type="button" onClick={this.props.onClick}>
					{this.props.children}
				</button>
			</div>	
		)
	}
};