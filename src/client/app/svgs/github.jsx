import React from 'react';
import GitSvg from './data/GitHub-Logo.svg'

export default class Github extends React.Component {
	render() {
		return (
			<div className={this.props.className} id={this.props.id} onClick={this.props.onClick}>
				<GitSvg className="contactSvgIcon"/>
				<div className="titleSvg">
					<h3 className="text-center">GitHub</h3>
				</div>
			</div>	
		);
	}
};
