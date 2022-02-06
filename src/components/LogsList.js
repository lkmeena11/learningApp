import React from 'react';

class LogsList extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
            <div className="container">
                <ul>
                    <li>Log 1</li>
                    <li>Log 2</li>
                </ul>
            </div>
		);
	}
}

export default LogsList;