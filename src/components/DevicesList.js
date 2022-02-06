import React, { useState, useEffect, useContext } from 'react';
import { Container, ActionButtons, Button, CardsList } from '../utils/StyledCompLib';
import ItemCard from './ui/ItemCard';
import ActionsContext from './contexts/ActionsContext';
import Grid from "@material-ui/core/Grid";
import { prettyDate } from '../utils/helpers';

export default function DevicesList() {
	const [devices, setDevices] = useState([]);
	const [selectedDevices, setSelectedDevices] = useState([]);
	const [error, setError] = useState(null);
  	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// setDevices([
		// 	{ id: 1, deviceName: 'x', status: 'Online' },
		// 	{ id: 2, deviceName: 'y', status: 'Online' },
		// 	{ id: 3, deviceName: 'z', status: 'Offline' }
		// ]);
		fetch("https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setDevices(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, []);

	const { setActionsList } = useContext(ActionsContext);
	const logAction = (actionName) => {
		if (selectedDevices.length > 0) {
			let ret = [];
			selectedDevices.map((deviceId) => {
				const device = devices.filter(x => x.id === deviceId);
				ret.push(device[0].deviceName || '');
			});
			
			const info = { action: actionName || 'Scan', deviceNames: ret.join(','), time: prettyDate() };
		
			setActionsList(info);
		} else {
			console.log('No device is selected to ' + actionName);
		}

		// clear after action completes
		setSelectedDevices([]);
	};

	const toggleDeviceSelection = (deviceId) => {
		const exists = selectedDevices.indexOf(deviceId);
		let ret = [];
		if (exists > -1) {
			ret = [...selectedDevices.slice(0, exists), ...selectedDevices.slice(exists+1)];
			setSelectedDevices(ret);
		} else {
			setSelectedDevices([...selectedDevices, ...[deviceId]]);
		}
	};

	if (error) {
		return <Container>Error: {error.message}</Container>;
	  } else if (!isLoaded) {
		return <Container>Loading...</Container>;
	  } else {
		return (
			<ActionsContext.Consumer>
				{values => (
					<Container>
						<ActionButtons>
							<Button active={selectedDevices.length > 0} onClick={() => { logAction('Scan'); }}>Scan</Button>
							<Button onClick={() => { logAction('Terminate'); }}>Terminate</Button>
						</ActionButtons>
						<Grid container spacing={1}>
							{devices.map((device, i) => {
								const deviceId = device.id;
								const isActive = selectedDevices.includes(deviceId);
								return (<ItemCard key={device.id} isActive={isActive} item={device} onClick={() => { toggleDeviceSelection(deviceId); }} />);
							})}
						</Grid>
					</Container>
				)}
			</ActionsContext.Consumer>
		);
	}
}
