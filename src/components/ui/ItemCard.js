import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import { Card, ActiveCard, DeviceStatus, ActiveDeviceStatus, DeviceTitle, DeviceInfo } from '../../utils/StyledCompLib';

export default function ItemCard({isActive, item, onClick}) {
    const CardComponent = isActive ? ActiveCard : Card;
	const DeviceStautsComponent = item.status && item.status === 'Online' ? ActiveDeviceStatus : DeviceStatus;
  
	return (
        <Grid item xs={12} sm={6} md={4} onClick={onClick}>
            <Paper>
                <CardComponent>
                    <DeviceStautsComponent>&nbsp;</DeviceStautsComponent>
                    <DeviceTitle id={'device-'+item.id}>{item.deviceName || ''}</DeviceTitle>
                    <DeviceInfo>
                        <div>{item.ipAddress || ''}</div>
                        <div>{item.operatingSystem || ''}</div>
                        <div>{item.status || ''}</div>
                    </DeviceInfo>
                </CardComponent>
            </Paper>
        </Grid>
    );
}
