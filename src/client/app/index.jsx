import React from 'react';
import {render} from 'react-dom';

import HelloWorld from './hello-world.jsx';

class App extends React.Component {
	render() {
		return (
			<div>	
				<AwesomeComponent />
			</div>
		);
	}
}

const app = document.getElementById('app');
render( <HelloWorld phrase="ES6"/>, app);