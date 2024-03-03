import React from 'react'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const User = ({ name, email, index, userList, setUserList }) => {
    const deleteUser = (index) => {
        let tempArr = userList
        tempArr.splice(index, 1);
        setUserList([...tempArr])
    }

    return (
        <div className="user">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Button
                onClick={() => deleteUser(index)}
                variant="contained" color="error">
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default User