import React from 'react';

const active = "active-title";
const passive = "passive-title";

export default class TitelSelect extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			status1: passive,
			status2: passive,
			status3: passive
		}
	}
	setActiveOne(){

	}
	render() {
		return (
			<div>
				<div className={"left " + this.state.status1}>
					<p>refallschwil</p>
				</div>
				<div className={"center " + this.state.status2}>
					<p>sprungbraett </p>
				</div>
				<div className={"right " + this.state.status3}>
					<p>d-leng</p>
				</div>
			</div>
		)
	}
}