import React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography,Paper,Link as MuiLink, Grid } from '@mui/material';
import { Link ,
   Navigate
} from "react-router-dom";
import {  doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';






const Login = () => {
 const {userLoggedIn} = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 
  // email and password login function
  const handleLogin = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true);
      if (!email.trim()) {
        setErrorMessage('Email is required.');
        setIsSigningIn(false);
        return;
      }
      if (!password.trim()) {
        setErrorMessage('Password is required.');
        setIsSigningIn(false);
        return;
      }
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage('Invalid email or password ');
      }
      setIsSigningIn(false);
    }
  };
// google login function
  const onGoogleSignIn = async  (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage('Google sign-in failed. Please try again.');
      }
      setIsSigningIn(false);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/profile" replace={true} />;
  }
  return (

    <Paper elevation={3} sx={{ padding: '30px 20px', width: '400px', margin: '20px auto', marginTop: '85px' }}>
    <form onSubmit={handleLogin}>
      <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: '#03265B',
                fontWeight: '700',
                fontFamily: 'Gordita, sans-serif',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Login
            </Typography>
          </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField fullWidth label="Email" variant="outlined" 
          value={email}
           onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: '16px' }}
            />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField fullWidth label="Password" variant="outlined" type="password" 
          value={password}
           onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: '16px' }}
            />
        </Grid >
        {errorMessage && (
            <Grid item xs={12}>
              <Typography color="error" sx={{ textAlign: 'center' }}>
                {errorMessage}
              </Typography>
            </Grid>
          )}
        <Grid item xs={12} sx={{ minWidth: '100%',marginTop: '5px'}}>
          <Button variant="contained" type="submit" sx={{ minWidth: '80%', bgcolor: '#03265B',marginLeft:"33px" }}>
            Login
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '5px', textAlign: 'center' }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <MuiLink component={Link} to="/signup">
              Sign up
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '5px' }}>
          <Button onClick={onGoogleSignIn}   sx={{ width: '100%', color: '#03265B' }}>
            Continue with Google
          </Button>
        </Grid>
      </Grid>
    </form>
  </Paper>

   
  )
}

export default Login

