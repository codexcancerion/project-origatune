"use client"
import React from "react";
import './Hero.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const Hero = () => {
  return (
    <div className="hero-holder">
      <div className="hero">
        <h1 className="title">
          Welcome to Origatune
        </h1>
        <h4>
          Discover quality instruments for every melodic notes!
        </h4>
        <button className="button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
