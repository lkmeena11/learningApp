import React from 'react';

class Logs extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="container">
					<ul>
						<li>Log 1</li>
						<li>Log 2</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Logs;