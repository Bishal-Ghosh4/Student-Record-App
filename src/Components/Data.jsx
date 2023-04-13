import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

function Data(props) {
    return (
        <div className="formgroup">
            <h4>{props.name}</h4>
            <h4>{props.email}</h4>
            <h4>{props.language}</h4>
            <Stack>
                <Button variant="contained" color='error' size="small"><DeleteIcon /></Button>
            </Stack>
        </div>
    )
}

export default Data
