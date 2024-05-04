"use client"
// my components
import developers from '../data/developers.json';
// data json
// material components
import { Grid, Link, Paper } from "@mui/material";
import { useState } from "react";
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
// custom styles
import './page.css';
import OrderHistory from "./OrderHistory";

export default function Page() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    address: "",
    phoneNumber: ""
    // Add more fields as needed
  });

  const person = developers.developers[2];
  const personImgLink = "/img/developers/"+person.id+".jpg"

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>MY ACCOUNT</h1>
        </div>

        <div className="section-holder">
          
          <div className="regrouper account">
            <h2 className="group-title"></h2>
            <p className="group-subtitle"></p>   

            <div className="account-container">
              <Grid container>
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
                        <h3>Personal Information</h3>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td className="label">Name</td>
                            <td className="data">{person.name}</td>
                          </tr>
                          <tr>
                            <td className="label">Email</td>
                            <td className="data">{person.email}</td>
                          </tr>
                          <tr>
                            <td className="label">Phone Number</td>
                            <td className="data">{person.contactNumber}</td>
                          </tr>
                          <tr>
                            <td className="label">Address</td>
                            <td className="data">{person.location}</td>
                          </tr>
                        </tbody>                        
                      </table>
                      <Button variant="contained" className="logout-btn">Logout</Button>
                    </div>
                </Grid>
              </Grid>

              

              <Accordion defaultExpanded>
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

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Settings
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
          </div>  
        </div>        
      </div>
      </div>
    </>    
  );
}
