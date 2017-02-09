import React from 'react';
import ReactDOM from 'react-dom';


export default class Slide extends React.Component {
	render() {
		return (
			<div className="slide">
				<div className="container">
					<div className="placeholderMenu"></div>
					{this.props.children}
				</div>
			</div>
		);
	}
};