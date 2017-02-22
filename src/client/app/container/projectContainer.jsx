import React from 'react';

import Console from '../components/projects/console.jsx';
import Display from '../components/projects/display.jsx';
import IconSelect from '../components/projects/iconSelect.jsx';
import TitelSelect from '../components/projects/titelSelect.jsx';

import Ref from '../data/images/refallschwil.jpg';
import Sprung from '../data/images/sprungbraett.jpg';
import Leng from '../data/images/dLeng.jpg';

export default class ProjectContainer extends React.Component {
	render() {
		return (
			<div id="containerProject">
				<div id="titel">
					<h1 className="display-1" id="projectsTitel">Projects</h1>
				</div>
				<div id="containerTitelSelect"> 
					<TitelSelect/>
				</div>
				<div id="containerDisplay"> 
					<Display imgLink={Ref}/>
				</div>
				<div id="containerIcon"> 
					<IconSelect/>
				</div>
				<div id="containerConsole"> 
					<Console/>
				</div>
			</div>
		)
	}
}