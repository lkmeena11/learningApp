import React from 'react';
import '../globals/app.css';
import EndPointManager from './EndPointManager';

class App extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return <EndPointManager />;
	}
}

export default App;