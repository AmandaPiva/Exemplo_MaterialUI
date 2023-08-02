import { useState } from 'react';
import { Box, Button } from '@mui/material'
import { TextField } from '@mui/material'

function Login() {

    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <Box sx={{ typography: 'Cadastro', fontSize: 'h4.fontSize', textAlign: 'center', marginTop: '25px', fontFamily: 'Roboto', color: '#7B68EE', fontWeight: 'bold' }}>Login Your Account</Box>
            <Box sx={{
                backgroundColor: 'blue',
                height: '50vh',
                width: '20vw',
                margin: 'auto',
                marginTop: '50px',
                paddingTop: '5rem',
                display: 'grid',
                gridTemplateRows: 'repeat(6, 1fr)',
                background: '#F8F6F9',
                borderRadius: '5px',
            }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ height: '6vh', width: '15vw', margin: 'auto' }} />
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ height: '6vh', width: '15vw', margin: 'auto' }} />
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ height: '6vh', width: '15vw', margin: 'auto' }} />
                <Button variant="contained" sx={{ height: '5vh', width: '10vw', margin: 'auto', background: '#FF1493' }}>Sign in</Button>
                <Button variant="contained" sx={{ height: '5vh', width: '10vw', margin: 'auto', background: '#7B68EE' }}>Login With GitHub</Button>
            </Box>
        </>
    )
}

export default Login