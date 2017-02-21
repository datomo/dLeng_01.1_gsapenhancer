import React from 'react';

export default class FillerSlide extends React.Component{
	render() {
		return (
			<div id={this.props.id} className="filler">
				<div className="intoFiller"></div>
				<div className="outaFiller"></div>
			</div>
		)
	}
}