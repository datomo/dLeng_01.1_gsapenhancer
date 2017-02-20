import React from 'react';


export default class Slide extends React.Component {
	render() {
		return (
			<div className="slide" id={this.props.id}>	
						{this.props.container ? (
							<div className="child-container">
								<div className="placeholderMenu"></div>
								{this.props.children}	
							</div>
						) :(
							<div className="child-container-full">
								<div className="placeholderMenu"></div>
								{this.props.children}
							</div>
						)}
			</div>
		);
	}
};