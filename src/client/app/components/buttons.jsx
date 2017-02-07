import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
	render() {
		return (
			<div className="row justify-content-md-center">
				<button type="button" onClick={this.props.onClick} className="btn btn-outline-danger btn-lg ">
					{this.props.children}
				</button>
			</div>	
		)
	}
};