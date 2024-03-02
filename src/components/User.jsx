import React from 'react'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const User = ({ name, email, index }) => {
    return (
        <div className="user">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Button variant="contained" color="error">
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default User