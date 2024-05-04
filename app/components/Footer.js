import React from "react";
import './NavBar.css';
import './Footer.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Link from "next/link";
import { Container, Grid } from "@mui/material";

export default function Footer() {
    return (
        <div className="footer">
            <Container className="footer-container">
                <Grid container>
                    <Grid item lg={4} md={4} sm={12} className="logo-zone">
                        <img className="logo" src='/img/emblems/origatune-emblem.png' alt="Logo" />
                        <p>Origatune Merchandise</p>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <p>Origatune Merchandise</p>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <p>Origatune Merchandise</p>
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
