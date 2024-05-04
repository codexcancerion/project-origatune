"use client"
import React from "react";
import './ProfileCard.css';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Grid, Item } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


const ProfileCard = ({ key, developer }) => {
  // const imgLink = "/img/developers/" + product.id +".jpg";
  const imgLink = "/img/developers/"+developer.id+".jpg";
  return (
    <div className="profile-card">
        <div className="profile-picture-holder">
            <Image
                src={imgLink}
                width={1000}
                height={1000}
                alt={developer.name}
                className= "profile-picture"
            />
        </div>
        <div className="profile-info">
            <h2>{developer.name}</h2>
            <p>Level {developer.age} in Life</p>
            <p>Gender: {developer.gender}</p>
            <p>Location: {developer.location}</p>
            <p>Contact Number:</p>
            <p>{developer.contactNumber}</p>
        </div>
    </div>

  );
};
export default ProfileCard;

