import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle, user, error} = useAuth()
    return (
        <div>
            <Button onClick={signInWithGoogle} variant="contained">Google signIn</Button>
            <p>{user.email}</p>
            <p>{error}</p>
        </div>
    );
};

export default Login;