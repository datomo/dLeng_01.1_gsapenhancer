import React from 'react';

import Console from '../components/projects/console.jsx';
import Display from '../components/projects/display.jsx';
import IconSelect from '../components/projects/iconSelect.jsx';
import TitelSelect from '../components/projects/titelSelect.jsx';

export default class ProjectContainer extends React.Component {
	render() {
		return (
			<div id="containerProject">
				<div id="titel">
					<h3 id="projectsTitel">Projects</h3>
				</div>
				<div id="containerTitelSelect"> <TitelSelect/></div>
				<div id="containerDisplay"> <Display/></div>
				<div id="containerIcon"> <IconSelect/></div>
				<div id="containerConsole"> <Console/></div>
			</div>
		)
	}
}