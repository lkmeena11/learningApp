import React, { useState, useEffect } from 'react';
import { Container, CardsList } from '../utils/StyledCompLib';
import ItemCard from './ui/ItemCard';

export default function LogsList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems([
			{ action: 'Scan', name: 'x,y', time: '22/10/2021' },
			{ action: 'Terminate', name: 'y', time: '02/02/2020' },
			{ action: 'Scan', name: 'x', time: '15/11/2021' },
		]);
	}, []);
	return (
		<Container>
			<CardsList>
				{items.map((item, i) => {
					return (<ItemCard key={i} item={item} />);
				})}
			</CardsList>
		</Container>
	);
}
