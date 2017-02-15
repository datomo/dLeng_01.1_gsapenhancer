import React from 'react';
import GitSvg from './data/close-envelope.svg'

export default class Mail extends React.Component {
	render() {
		return (
			<div className={this.props.className} id={this.props.id} onClick={this.props.onClick}>
				<GitSvg className="contactSvgIcon"/>
				<div className="titleSvg">
					<h3 className="text-center">Mail</h3>
				</div>
			</div>	
		);
	}
};