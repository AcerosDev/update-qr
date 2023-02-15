import React from 'react';
import Alert from '@mui/material/Alert';

function Alerts({ severity, message }) {
    return (
        <>
            <Alert severity={severity}>
                {message}
            </Alert>
        </>
    )
}

export default Alerts
