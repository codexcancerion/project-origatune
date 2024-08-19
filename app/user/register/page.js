"use client"
// my components
// data json
// material components
import React from 'react';
import { Card, CardContent, Grid, Link, Paper, FormGroup, FormControlLabel, FormControl, Checkbox, Box } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useUser } from '@/context/UserContext';
import {Alert} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {Breadcrumbs} from '@mui/material';
// custom styles
import './page.css';

export default function Page() {
  const {  updateUserData } = useUser();
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    address: "",
    phoneNumber: ""
    // Add more fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  // State to manage checkbox status
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState(""); 

  const [houseNumber, setHouseNumber] = useState(""); 
  const [street, setStreet] = useState(""); 
  const [barangay, setBarangay] = useState(""); 
  const [cityMunicipality, setCityMunicipality] = useState(""); 
  const [province, setProvince] = useState(""); 
  const [region, setRegion] = useState(""); 

  const [useCreditCard, setUseCreditCard] = useState(false); 
  const [cardholderName, setCardholderName] = useState(""); 
  const [cardNumber, setCardNumber] = useState(""); 
  const [cvvcvc, setCvvcvc] = useState(""); 

  const [useMaya, setUseMaya] = useState(false);
  const [mayaName, setMayaName] = useState(""); 
  const [mayaNumber, setMayaNumber] = useState(""); 

  const [useGCash, setUseGcash] = useState(false);
  const [gcashName, setGcashName] = useState(""); 
  const [gcashNumber, setGcashNumber] = useState(""); 

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmedPassword, setConfirmedPassword] = useState(true); 
  
  const [successfulRegistration, setSuccessfulRegistration] = useState(false); 

  const handleFullName = (event) => setFullName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePhoneNumber = (event) => setPhoneNumber(event.target.value);
  const handleHouseNumber = (event) => setHouseNumber(event.target.value);
  const handleStreet = (event) => setStreet(event.target.value);
  const handleBarangay = (event) => setBarangay(event.target.value);
  const handleCityMunicipality = (event) => setCityMunicipality(event.target.value);
  const handleProvince = (event) => setProvince(event.target.value);
  const handleRegion = (event) => setRegion(event.target.value);
  const handleCardholderName = (event) => setCardholderName(event.target.value);
  const handleCardNumber = (event) => setCardNumber(event.target.value);
  const handleCvvcvc = (event) => setCvvcvc(event.target.value);
  const handleGcashName = (event) => setGcashName(event.target.value);
  const handleGcashNumber = (event) => setGcashNumber(event.target.value);
  const handleMayaName = (event) => setMayaName(event.target.value);
  const handleMayaNumber = (event) => setMayaNumber(event.target.value);
  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handlePasswordConfirmation = (event) => event.target.value === password ? setConfirmedPassword(true) : setConfirmedPassword(false);

  // Handler function to toggle the checkbox status
  const handleCreditCardCheckboxChange = (event) => {
    setUseCreditCard(event.target.checked);
  };
  const handleGCashCheckboxChange = (event) => {
    setUseGcash(event.target.checked);
  };
  const handleMayaCheckboxChange = (event) => {
    setUseMaya(event.target.checked);
  };

  const handleSubmit = () => {
    setFullName(document.getElementById("fullName").value);
    setEmail(document.getElementById("email").value);
    setPhoneNumber(document.getElementById("phoneNumber").value);
    setHouseNumber(document.getElementById("houseNumber").value);
    setStreet(document.getElementById("street").value);
    setBarangay(document.getElementById("barangay").value);
    setCityMunicipality(document.getElementById("cityMunicipality").value);
    setProvince(document.getElementById("province").value);
    setRegion(document.getElementById("region").value);
    setUseCreditCard(document.getElementById("useCreditCard").value);
    setCardholderName(document.getElementById("cardholderName").value);
    setCardNumber(document.getElementById("cardNumber").value);
    setCvvcvc(document.getElementById("cvvcvc").value);
    setUseMaya(document.getElementById("useMaya").value);
    setMayaName(document.getElementById("mayaName").value);
    setMayaNumber(document.getElementById("mayaNumber").value);
    setUseGcash(document.getElementById("useGCash").value);
    setGcashName(document.getElementById("gcashName").value);
    setGcashNumber(document.getElementById("gcashNumber").value);
    setUsername(document.getElementById("username").value);
    setPassword(document.getElementById("password").value);
    // Collect form data
    const formData = {
      personalInfo: {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber
      },
      shippingInfo: {
        houseNumber: houseNumber,
        street: street,
        barangay: barangay,
        cityMunicipality: cityMunicipality,
        province: province,
        region: region
      },
      paymentInfo: {
        useCreditCard: useCreditCard,
        cardholderName: cardholderName,
        cardNumber: cardNumber,
        cvvcvc: cvvcvc,
        useMaya: useMaya,
        mayaName: mayaName,
        mayaNumber: mayaNumber,
        useGCash: useGCash,
        gcashName: gcashName,
        gcashNumber: gcashNumber
      },
      loginInfo: {
        username: username,
        password: password
      }
    };
  
    // Save form data to context
    updateUserData(formData);
    console.log(formData)
    setSuccessfulRegistration(true);
    
  };
  
  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>REGISTRATION</h1>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/user/register/"
                aria-current="page"
              >
                Registration
              </Link>
            </Breadcrumbs>
          </div>
          <Box hidden={!successfulRegistration}>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Registration Successful.
            </Alert>
          </Box>
        </div>

        <div className="section-holder">
          
          <div className="regrouper">
            <h2 className="group-title">Personal Information</h2>
            <p className="group-subtitle"></p>       
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="fullName"
                  label="Full Name"
                  fullWidth
                  onSubmit={handleFullName}
                  defaultValue={'Herbert Alem Acoking'}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="email"
                  type="email"
                  label="Email"
                  fullWidth
                  onChange={handleEmail}
                  defaultValue={'herbert@gmail.com'}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  type="number"
                  id="phoneNumber"
                  label="Phone Number"
                  
                  fullwidth
                  onChange={handlePhoneNumber}
                  defaultValue={'09123456789'}
                /> 
              </Grid>
            </Grid>
          </div>  
          <div className="regrouper">
            <h2 className="group-title">Shipping Information</h2>
            <p className="group-subtitle">Primary Shipping Address</p>       
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="houseNumber"
                  label="House Number"
                  fullWidth
                  onChange={handleHouseNumber}
                  defaultValue={'123'}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="street"
                  label="Street"
                  fullWidth
                  onChange={handleStreet}
                  defaultValue={'Kalye'}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="barangay"
                  label="Barangay"
                  fullWidth
                  onChange={handleBarangay}
                  defaultValue={'Tawang'}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="cityMunicipality"
                  label="City / Municipality"
                  fullWidth
                  onChange={handleCityMunicipality}
                  defaultValue={'La Trinidad'}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="province"
                  label="Province"
                  fullWidth
                  onChange={handleProvince}
                  defaultValue={'Benguet'}
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="region"
                  label="Region"
                  fullWidth
                  onChange={handleRegion}
                  defaultValue={'Region'}
                /> 
              </Grid>
            </Grid>        
          </div>  
          <div className="regrouper">
            <h2 className="group-title">Payment Information</h2>
            <p className="group-subtitle"></p>
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <Card elevation={3} fullWidth>
                  <CardContent>
                    <FormGroup>
                      <FormControlLabel 
                        id="useCreditCard"
                        control={<Checkbox  />} 
                        label="Credit/Debit Card" 
                        onChange={handleCreditCardCheckboxChange}
                        />
                      <TextField
                        required
                        id="cardholderName"
                        label="Cardholder's Name"
                        fullWidth
                        disabled={!useCreditCard}
                        onChange={handleCardholderName}
                      /> 
                      <TextField
                        required
                        id="cardNumber"
                        label="Card Number"
                        type='number'
                        fullWidth
                        disabled={!useCreditCard}
                        onChange={handleCardNumber}
                      /> 
                      <TextField
                        required
                        id="cvvcvc"
                        label="CVV/CVC"
                        type='number'
                        fullWidth
                        disabled={!useCreditCard}
                        onChange={handleCvvcvc}
                      /> 
                    </FormGroup>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item lg={4} md={4} sm={12}>
                <Card elevation={3} fullWidth>
                  <CardContent>
                    <FormGroup>
                      <FormControlLabel 
                        id="useGCash"
                        control={<Checkbox defaultChecked/>} 
                        label="GCash" 
                        onChange={handleGCashCheckboxChange}
                        defaultChecked
                        />
                      <TextField
                        required
                        id="gcashName"
                        label="Full Name"
                        fullWidth
                        disabled={!useGCash}
                        onChange={handleGcashName}
                        defaultValue={'Herbert Acoking'}
                      /> 
                      <TextField
                        required
                        id="gcashNumber"
                        label="GCash Number"
                        type='number'
                        fullWidth
                        disabled={!useGCash}
                        onChange={handleGcashNumber}
                        defaultValue={'09123456789'}
                      /> 
                    </FormGroup>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <Card elevation={3} fullWidth>
                  <CardContent>
                    <FormGroup>
                      <FormControlLabel 
                        id="useMaya"
                        control={<Checkbox  />} 
                        label="Maya" 
                        onChange={handleMayaCheckboxChange}
                        />
                      <TextField
                        required
                        id="mayaName"
                        label="Full Name"
                        fullWidth
                        disabled={!useMaya}
                        onChange={handleMayaName}
                      /> 
                      <TextField
                        required
                        id="mayaNumber"
                        label="Maya Number"
                        type='number'
                        fullWidth
                        disabled={!useMaya}
                        onChange={handleMayaNumber}
                      /> 
                    </FormGroup>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <Card elevation={3} fullWidth>
                  <CardContent>
                    <FormGroup>
                      <FormControlLabel 
                        id="specify-later"
                        control={<Checkbox  />} 
                        label="Specify Later" 
                        />
                    </FormGroup>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>     

          </div>        
          <div className="regrouper">
            <h2 className="group-title">Login Information</h2>
            <p className="group-subtitle"></p>  
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="username"
                  label="Username"
                  fullWidth
                  onChange={handleUsername}
                  defaultValue={'herbert123'}
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
                /> 
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="confirm-password"
                  type="password"
                  label="Confirm Password"
                  fullWidth
                  onChange={handlePasswordConfirmation}
                  error={!confirmedPassword}
                /> 
              </Grid>
            </Grid>       
          </div> 

          
          <div className="regrouper">
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <h2 className="group-title"></h2>
                <p className="group-subtitle"></p>  
                  <Button 
                    type='submit'
                    onClick={handleSubmit}
                    disabled={!confirmedPassword}
                    variant='contained'
                    fullWidth
                    >
                      Submit
                  </Button>
              </Grid>
            </Grid>
          </div> 

          
          <div className="regrouper">
            <Box hidden={!successfulRegistration}>
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Registration Successful.
              </Alert>
            </Box>
          </div> 
        </div>
      </div>
    </>    
  );
}
