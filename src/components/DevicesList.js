import React from 'react';

class DevicesList extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
            <div className="container">
                <ul>
                    <li>Device 1</li>
                    <li>Device 2</li>
                </ul>
            </div>
		);
	}
}

export default DevicesList;