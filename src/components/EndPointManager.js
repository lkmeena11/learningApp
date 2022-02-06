import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import DevicesList from './DevicesList';
import LogsList from './LogsList';

class EndPointManager extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<BrowserRouter>
		      <Routes>
		        <Route path="/" element={<Layout />}>
		          <Route index element={<DevicesList />} />
		          <Route path="logs" element={<LogsList />} />
		        </Route>
		      </Routes>
		    </BrowserRouter>
		);
	}
}

export default EndPointManager;