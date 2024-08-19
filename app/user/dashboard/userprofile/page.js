"use client"
// my components
import developers from '../../../data/developers.json';
// data json
// material components
import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useUser } from '@/context/UserContext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
// custom styles
import './page.css';

export default function Page() {
  const {userData, logout} = useUser();

  const person = developers.developers[3];
  const personImgLink = "/img/developers/"+person.id+".jpg";

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  }
  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>YOUR PROFILE</h1>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/user/dashboard/"
              >
                Dashboard
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/user/dashboard/userprofile/"
                aria-current="page"
              >
                User Profile
              </Link>
            </Breadcrumbs>
          </div>
        </div>

        <div className="section-holder full-section">
          
        <div className="regrouper account">
            <h2 className="group-title"></h2>
            <p className="group-subtitle"></p>   

            <div className="account-container">
              <Grid container spacing={5}>
                <Grid item lg={4} md={4} sm={12} className="picture-zone">
                  <div className="profile-picture-holder">
                    <Image
                          src={personImgLink}
                          width={1000}
                          height={1000}
                          alt="profile image"
                          className= "profile-picture"
                      />
                  </div>
                </Grid>

                <Grid item lg={8} md={8} sm={12}>
                    <div className="personal-info-container">
                      <div className="container-head">
                        <h2 className="group-title">Personal Information</h2>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td className="label">Name</td>
                            <td className="data">{userData.personalInfo.fullName}</td>
                          </tr>
                          <tr>
                            <td className="label">Email</td>
                            <td className="data">{userData.personalInfo.email}</td>
                          </tr>
                          <tr>
                            <td className="label">Phone Number</td>
                            <td className="data">{userData.personalInfo.phoneNumber}</td>
                          </tr>
                        </tbody>                        
                      </table>
                      <Button variant="contained" onClick={handleLogout} className="logout-btn">Logout</Button>
                    </div>
                </Grid>
              
                <Grid item lg={4} md={4} sm={12}> 
                  <h2 className="group-title">Shipping Information</h2>
                  <p className="group-subtitle">Primary Shipping Address</p>       
                  <p className="data"> {userData.shippingInfo.houseNumber}, {userData.shippingInfo.street}, {userData.shippingInfo.barangay}, {userData.shippingInfo.cityMunicipality}, {userData.shippingInfo.province}, {userData.shippingInfo.region}</p>
                </Grid>
                
                <Grid item lg={4} md={4} sm={12}>
                  <h2 className="group-title">Payment Information</h2>
                  <Box hidden={!userData.paymentInfo.useCreditCard}>
                    <p className="group-subtitle">Credit/Debit Card</p>  
                    <table>
                      <tbody>
                        <tr>
                          <td className="label">Cardholder Name</td>
                          <td className="data">{userData.paymentInfo.cardholderName}</td>
                        </tr>
                        <tr>
                          <td className="label">Card Number</td>
                          <td className="data">{userData.paymentInfo.cardNumber}</td>
                        </tr>
                        <tr>
                          <td className="label">CVV/CVC</td>
                          <td className="data">{userData.paymentInfo.cvvcvc}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                  
                  <Box hidden={!userData.paymentInfo.useGCash}>
                    <p className="group-subtitle">GCash</p>  
                    <table>
                      <tbody>
                        <tr>
                          <td>Full Name</td>
                          <td className="data">{userData.paymentInfo.gcashName}</td>
                        </tr>
                        <tr>
                          <td>GCash Number</td>
                          <td className="data">{userData.paymentInfo.gcashNumber}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                  
                  <Box hidden={!userData.paymentInfo.useMaya}>
                    <p className="group-subtitle">Maya</p>  
                    <table>
                      <tbody>
                        <tr>
                          <td>Full Name</td>
                          <td className="data">{userData.paymentInfo.mayaName}</td>
                        </tr>
                        <tr>
                          <td>Maya Number</td>
                          <td className="data">{userData.paymentInfo.mayaNumber}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                </Grid>
                
                <Grid item lg={4} md={4} sm={12}>
                  <h2 className="group-title">Login Information</h2>
                  <p className="group-subtitle"></p>   
                    <table>
                      <tbody>
                        <tr>
                          <td>Username</td>
                          <td className="data">{userData.loginInfo.username}</td>
                        </tr>
                        <tr>
                          <td>Password</td>
                          <td className="data">*****</td>
                        </tr>
                      </tbody>
                    </table>                   
                </Grid>
              </Grid>
            </div>          
          </div> 
        </div>
      </div>
    </>    
  );
}
