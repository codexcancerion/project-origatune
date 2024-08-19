import React from "react";
import './Footer.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Link from "next/link";
import { Container, Grid } from "@mui/material";
import { useUser } from "../../context/UserContext";

export default function Footer() {
    const { userLoggedIn } = useUser;
    return (
        <div className="footer">
            <Container className="footer-container">
                <Grid container spacing={2}>
                    <Grid item lg={3} md={3} sm={12} className="logo-zone">
                        <img className="logo" src='/img/emblems/origatune-emblem.png' alt="Logo" />
                        <p>Origatune Merchandise</p>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12}>
                        <p className="info-title">Contact Us</p>
                            <p className="info">Phone Number: +63 (912) 234-5678</p>
                            <p className="info">Email: support@origatune.com</p>
                        <p className="info-title">Social Media</p>
                            <p className="info">Facebook: <a href="#">Origatune Merchandise</a></p>
                            <p className="info">Twitter: <a href="#">@origatunemerchandise</a></p>
                            <p className="info">LinkedIn: <a href="#">@origatunemerchandise</a></p>
                        <p className="info-title">Physical Address</p>
                            <address className="info">
                                Example Store Inc.<br/>
                                123 Main Street<br/>
                                City, State, Zip Code<br/>
                                Country
                            </address>
                                
                    </Grid>
                    <Grid item lg={3} md={3} sm={12}>
                        <p className="info-title">Business Hours</p>
                            <p className="info">Monday-Friday: 8:00 AM - 5:00 PM (Local Time)</p>
                            <p className="info">Saturday: 10:00 AM - 4:00 PM (Local Time)</p>
                            <p className="info">Sunday: Closed</p>
                        <p className="info-title">FAQs and Help Center</p>
                                <p className="info">FAQs: <a href="#">Link to FAQs</a></p>
                                <p className="info">Help Center: <a href="#">Link to Help Center</a></p>
                        <p className="info-title">Feedback and Suggestions</p>
                                <p className="info">Email: feedback@examplestore.com</p>
                                <p className="info">Feedback Form: <a href="#">Link to Feedback Form</a></p>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12}>
                    <p className="info-title">Quick Links</p>
                            <p className="info"><a href="/">Home</a></p>
                            <p className="info"><a href="/shop/">Shop</a></p>
                            <p className="info"><a href="/aboutus/">About Us</a></p>
                            
                            {/* {!userLoggedIn ? (
                                <>
                                    <p className="info"><a href="/user/login/">Login</a></p>
                                    <p className="info"><a href="/user/register/">Register</a></p>
                                </>
                            ) : (
                                <>
                                    <p className="info"><a href="/cart/">Cart</a></p>
                                    <p className="info"><a href="/user/dashboard/">Dashboard</a></p>
                                </>
                            )} */}
                            
                    </Grid>
                </Grid>
                <hr></hr>
                
                <Grid container>
                    <Grid item lg={6} md={6} sm={12}>
                        <p>Project Origatune © 2024 - All rights reserved</p>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} className="ends">
                        <img className="c" src='/img/emblems/cxc.png' alt="Logo" />
                        <img className="c" src='/img/emblems/c.png' alt="Logo" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
