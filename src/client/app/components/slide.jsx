import React from 'react';
import ReactDOM from 'react-dom';


export default class Slide extends React.Component {
	render() {
		return (
			<div className="slide" id={this.props.id}>
				<div className="container">
					<div className="placeholderMenu"></div>
						{this.props.container ? (
							<div className="child-container">
								{this.props.children}	
							</div>
						) :(
							<div>
								{this.props.children}
							</div>
						)}

					
				</div>
			</div>
		);
	}
};