"use client"
// my components
// data json
// material components
import React from 'react';
import { Box, Card, CardContent, Grid, Link, Paper, FormGroup, FormControlLabel, FormControl, Checkbox } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useUser } from '@/context/UserContext';
import {Alert} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
// custom styles
import './page.css';

export default function Page() {
  const {  userData, updateUserLogIn, userLoggedIn } = useUser();
  const [successLogin, setSuccessLogin] = useState(false); 
  const [wrongPassword, setWrongPassword] = useState(false); 
  const [userNotFound, setUserNotFound] = useState(false); 

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleLogin = () => {
    setSuccessLogin(false);
    setUserNotFound(false);
    setWrongPassword(false);
    // Save form data to context
    const hasUsername = userData.loginInfo.username === username;
    if (hasUsername) {
      const confirmedPassword = userData.loginInfo.password === password;
      if (confirmedPassword) {
        setSuccessLogin(true);
        updateUserLogIn();
        // Navigate to the homepage using window.location
        window.location.href = '/';
      } else setWrongPassword(true);
    } else setUserNotFound(true);
    
    console.log(userLoggedIn);

  };
  
  return (
    <>
      <div className="page-container">

        <div className="section-holder">
                
          <div className="regrouper">
            <h2 className="group-title">Enter Information to Login</h2>
            <p className="group-subtitle"></p>  
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="username"
                  label="Username"
                  fullWidth
                  onChange={handleUsername}
                  helperText={userNotFound ? 'User not found' : ''}
                  error={userNotFound ? true : false}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="password"
                  type="password"
                  label="Password"
                  fullWidth
                  onChange={handlePassword}
                  helperText={wrongPassword ? 'Wrong Password' : ''}
                  error={wrongPassword ? true : false}
                /> 
              </Grid>
            </Grid>       
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <h2 className="group-title"></h2>
                <p className="group-subtitle"></p>  
                  <Button 
                    type='submit'
                    onClick={handleLogin}
                    disabled={password==="" && username===""}
                    variant='contained'
                    fullWidth
                    >
                      Login
                  </Button>
                  <Box hidden={!successLogin}>
                    <Alert severity="success">Log In Successful.</Alert>
                  </Box>
                  {/* <Box hidden={!wrongPassword}>
                    <Alert severity="warning">Wrong Password.</Alert>
                  </Box>
                  <Box hidden={!userNotFound}>
                    <Alert severity="warning">User not found.</Alert>
                  </Box> */}
              </Grid>
            </Grid>
          </div>

          <div className="regrouper">
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <p className="group-subtitle">If not yet registered</p>  
                <Link href={"/user/register/"}>
                  <Button 
                    type='submit'
                    // onClick={}
                    variant='outlined'
                    fullWidth
                    >
                      Register
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div> 
        </div>
      </div>
    </>    
  );
}
