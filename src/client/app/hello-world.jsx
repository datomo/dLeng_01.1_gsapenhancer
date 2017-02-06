import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
	render() {
		return (
			<h1>Hello from {this.props.phrase}!</h1>
		);
	}
};
