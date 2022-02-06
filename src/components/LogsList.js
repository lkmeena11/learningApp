import React, { useContext } from 'react';
import { Container, LogsContainer, StyledTableContainer } from '../utils/StyledCompLib';
import ItemCard from './ui/ItemCard';
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import ActionsContext from './contexts/ActionsContext';


export default function LogsList() {
	const context = useContext(ActionsContext);

	return (
		<ActionsContext.Consumer>
			{(values) => {
				const logs = values.actionsList || [];

				if (!logs.length) {
					return <Container>No logs available</Container>;
				} else {
					return (
						<LogsContainer>
							<StyledTableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }}>
									<TableHead>
									<TableRow>
										<TableCell>S.No.</TableCell>
										<TableCell>Action</TableCell>
										<TableCell>Divices</TableCell>
										<TableCell>Time</TableCell>
									</TableRow>
									</TableHead>
									<TableBody>
									{values.actionsList.map((row, i) => (
										<TableRow
										key={i}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
										<TableCell component="th" scope="row">{i+1}</TableCell>
										<TableCell>{row.action}</TableCell>
										<TableCell>{row.deviceNames}</TableCell>
										<TableCell>{row.time}</TableCell>
										</TableRow>
									))}
									</TableBody>
								</Table>
							</StyledTableContainer>
					    </LogsContainer>
					);
				}
			}}
		</ActionsContext.Consumer>
	);
}
