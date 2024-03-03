import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>404 - Page Not Fount</h1>
            <Button
                variant="contained"
                color='warning'
                style={{ float: 'right', alignItems: 'center' }}
                onClick={() => navigate(-1)}>
                Go Back to Previous Page.
            </Button>
        </div>
    )
}

export default Error