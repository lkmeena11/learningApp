import React from 'react';

class Navbar extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
            <div className="navbar">
                <div className="title">Endpoint Manager</div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="./logs">Logs</a></li>
                </ul>
            </div>
		);
	}
}

export default Navbar;