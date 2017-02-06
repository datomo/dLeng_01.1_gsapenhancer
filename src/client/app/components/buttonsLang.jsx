import React from 'react';
import ReactDOM from 'react-dom';


export default class ButtonsLang  extends React.Component {
	render() {
		return (
			<button type="button" onClick={this.props.onClick} className="btn btn-outline-info col-2 offset-3">
				{this.props.children}

			</button>
		)
	}
}
