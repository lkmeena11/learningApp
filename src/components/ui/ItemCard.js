import React from 'react';
import { Card } from '../../utils/StyledCompLib';

export default function ItemCard({item}) {
	return (<Card>{item.name}</Card>);
}
