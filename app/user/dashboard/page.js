"use client"
// my components
// data json
// material components
import React from 'react';
import { Card, Container, Grid, Box } from "@mui/material";
import { useState } from "react";
import { useUser } from '@/context/UserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderHistory from './OrderHistory';
import {Breadcrumbs} from '@mui/material';
import Link from 'next/link';
// custom styles
import './page.css';

export default function Page() {
  const { userData } = useUser();

  return (
    <>
      <div className="page-container dashboard">
        <div className="section-holder">
          <h1>YOUR DASHBOARD</h1>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/user/dashboard/"
                aria-current="page"
              >
                Dashboard
              </Link>
            </Breadcrumbs>
          </div>
        </div>

        <div className="section-holder full-section">          
          <div className="regrouper">
            <h2 className="group-title"></h2>
            <p className="group-subtitle"></p>       
            <Grid container spacing={2} paddingX={10}>
              <Grid item lg={4} md={4} sm={12}>
                <Link href="/user/dashboard/userprofile">
                  <Card className='card' elevation={3}> 
                    <AccountCircleIcon className='card-icon'></AccountCircleIcon>
                    <h1>Personal Profile</h1>
                  </Card>
                </Link>
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <Link href="/user/dashboard/userprofile">
                  <Card className='card' elevation={3}> 
                    <FavoriteIcon className='card-icon'></FavoriteIcon>
                    <h1>Wishlist</h1>
                  </Card>
                </Link>
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <Link href="/user/dashboard/userprofile">
                  <Card className='card' elevation={3}> 
                    <SettingsIcon className='card-icon'></SettingsIcon>
                    <h1>Settings</h1>
                  </Card>
                </Link>
              </Grid>
            </Grid>

          <Box className="order-history-box" >
            <Accordion defaultExpanded className="order-history">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Order History
                </AccordionSummary>
                <AccordionDetails>
                  <OrderHistory></OrderHistory>
                </AccordionDetails>
              </Accordion>
            </Box>
          </div>  
        </div>
      </div>
    </>    
  );
}
