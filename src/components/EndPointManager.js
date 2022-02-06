import React from 'react';
import Navbar from './Navbar';

class EndPointManager extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<Navbar />
				<div className="container">
					<ul>
						<li>Device 1</li>
						<li>Device 2</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default EndPointManager;