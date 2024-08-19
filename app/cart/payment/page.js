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
import { useCart } from '@/context/CartContext';
import {Alert} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {Breadcrumbs} from '@mui/material';
// custom styles
import './page.css';

export default function Page() {
  const { items, totalItems, totalPrice } = useCart();
  const { userData } = useUser();
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
          <h1>CHECK OUT</h1>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/cart">
                Cart
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/cart/payment/"
                aria-current="page"
              >
                Payment
              </Link>
            </Breadcrumbs>
          </div>
        </div>

        <div className="section-holder">
          <div className="regrouper">
            <h2 className="group-title">Review your information before proceeding</h2>
          </div>

          <div className="regrouper">
            <h2 className="group-title">Shipping Information</h2>
            <p className="group-subtitle">Primary Shipping Address</p>       
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <TextField
                  required
                  id="house-number"
                  label="House Number"
                  fullWidth
                  onChange={handleHouseNumber}
                  defaultValue={userData.shippingInfo.houseNumber}
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
                  id="city-municipality"
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
                        id="use-credit-card"
                        control={<Checkbox defaultChecked={userData.paymentInfo.useCreditCard}/>} 
                        label="Credit/Debit Card" 
                        onChange={handleCreditCardCheckboxChange}
                        />
                      <TextField
                        required
                        id="cardholder-name"
                        label="Cardholder's Name"
                        fullWidth
                        disabled={!useCreditCard }
                        onChange={handleCardholderName}
                      /> 
                      <TextField
                        required
                        id="card-number"
                        label="Card Number"
                        type='number'
                        fullWidth
                        disabled={!useCreditCard}
                        onChange={handleCardNumber}
                      /> 
                      <TextField
                        required
                        id="cvv-cvc"
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
                        id="use-gcash"
                        control={<Checkbox defaultChecked={userData.paymentInfo.useGCash}/>} 
                        label="GCash" 
                        onChange={handleGCashCheckboxChange}
                        defaultChecked
                        />
                      <TextField
                        required
                        id="gcash-name"
                        label="Full Name"
                        fullWidth
                        disabled={!userData.paymentInfo.useGCash}
                        onChange={handleGcashName}
                        defaultValue={'Herbert Acoking'}
                      /> 
                      <TextField
                        required
                        id="gcash-number"
                        label="GCash Number"
                        type='number'
                        fullWidth
                        disabled={!userData.paymentInfo.useGCash}
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
                        id="use-maya"
                        control={<Checkbox  />} 
                        label="Maya" 
                        onChange={handleMayaCheckboxChange}
                        />
                      <TextField
                        required
                        id="maya-name"
                        label="Full Name"
                        fullWidth
                        disabled={!useMaya}
                        onChange={handleMayaName}
                      /> 
                      <TextField
                        required
                        id="maya-number"
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
            </Grid>     
          </div>        

          
          <div className="regrouper">
            <h2 className="group-title">Total Payments</h2>
            <p className="group-subtitle"></p>
            <p>Total Items: <strong>{totalItems}</strong></p>
            <p>Total Price: <strong>{totalPrice.toFixed(2)}</strong></p>
          </div>

          <div className="regrouper">
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}> 
                {/* <Link href={"/user/register/"}> */}
                  <Button 
                    type='submit'
                    // onClick={}
                    variant='contained'
                    fullWidth
                    >
                      Proceed
                  </Button>
                {/* </Link> */}
              </Grid>
            </Grid>
          </div> 
        </div>
      </div>
    </>    
  );
}
