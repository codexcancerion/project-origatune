"use client"
import React from "react";
import './Hero.css';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Grid } from "@mui/material";

const Hero = () => {
  return (
    <div className="hero-holder">
      <div className="hero">
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <h1 className="title">
              Discover <p className="color"> quality instruments </p>
              for every melodic note
            </h1>
            <p className="subtitle">
            </p>
            <Link href="/shop/">
              <button className="button">
              Explore Origatune!
              </button>
            </Link>

          </Grid>
          <Grid item lg={6} md={6} xs={12} className="hero-img-holder">
            <img src="/img/pages/hero-guitar.png" className="hero-img"></img>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
