import React from 'react';
import GitSvg from './data/3d-outlined-shape.svg'

export default class Codepen extends React.Component {
	render() {
		return (
			<div className={this.props.className} id={this.props.id} onClick={this.props.onClick}>
				<GitSvg className="contactSvgIcon"/>
				<div className="titleSvg">
					<h3 className="text-center">Codepen.io</h3>
				</div>
			</div>
		);
	}
};
