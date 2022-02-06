import React, { useState, useEffect } from 'react';
import { Container, ActionButtons, Button, CardsList } from '../utils/StyledCompLib';
import ItemCard from './ui/ItemCard';

export default function DevicesList() {
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		setLogs([
			{ id: 1, name: 'x', status: 'available' },
			{ id: 1, name: 'y', status: 'available' },
			{ id: 1, name: 'z', status: 'not available' }
		]);
	}, []);

	return (
		<Container>
			<ActionButtons>
				<Button>Scan</Button>
				<Button>Terminate</Button>
			</ActionButtons>
			<CardsList>
				{logs.map((item, i) => {
					return (<ItemCard key={i} item={item} />);
				})}
			</CardsList>
		</Container>
	);
}
