import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import DevicesList from './DevicesList';
import LogsList from './LogsList';
import ActionsContext from './contexts/ActionsContext';

class EndPointManager extends React.Component {
	constructor(props) {
	  	super(props);
		this.state = {
			actionsList: []
		};
	}

	storeAction = (currentAction) => {
		this.setState({
			actionsList: [...this.state.actionsList, currentAction]
		});
	};

	render() {
		return (
			<ActionsContext.Provider value={{ actionsList: this.state.actionsList, setActionsList: this.storeAction }}>
				<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
					<Route index element={<DevicesList />} />
					<Route path="logs" element={<LogsList />} />
					</Route>
				</Routes>
				</BrowserRouter>
			</ActionsContext.Provider>
		);
	}
}

export default EndPointManager;