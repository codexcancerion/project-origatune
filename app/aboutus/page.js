// my components
import ProfileCard from "../components/ProfileCard";
// data json
import developers from "../data/developers.json";
// material components
import { Grid, Link, Breadcrumbs } from "@mui/material";
import Image from 'next/image';
// custom styles
import './page.css';
import developersGroup from '../../public/img/developers/group.jpeg';

export default function Page() {
  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>ABOUT US</h1>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/aboutus/"
                aria-current="page"
              >
                About Us
              </Link>
            </Breadcrumbs>
          </div>
        </div>

        <div className="section-holder">
          
          <div className="regrouper">
            <h2 className="group-title">Ahoy mate!</h2>
            <p className="group-subtitle">Welcome to Origatune, where we live by our motto: <strong>"Discover quality instruments for every melodic note."</strong></p>   
            <p className="group-subtitle">At Origatune, we blend the precision of origami with the harmony of music to offer a curated selection of instruments that inspire and delight. </p>
            <p className="group-subtitle">Whether you're a novice or a virtuoso, we're committed to providing you with the perfect tool to express your musical journey. </p>
            <p className="group-subtitle">Join us in exploring the endless possibilities of melody and rhythm.</p>   
       
          </div>

          <div className="regrouper">
            <h2 className="group-title">Project Origatune</h2>
            <p className="group-subtitle">Origatune is a collaborative project developed by a group of students at King's College of the Philippines as part of our Web Systems and Technologies course. </p>
            <p className="group-subtitle">Inspired by the fusion of creativity and innovation, Origatune aims to bridge the gap between music and technology through the power of Next.js and Material UI.</p>   
            <p className="group-subtitle">Origatune is an online music store that offers a seamless shopping experience for musicians of all levels.</p>
            <p className="group-subtitle">Our platform is built using Next.js, a cutting-edge technology that enables server-side rendering and provides enhanced performance for web applications.</p>   
          </div>
          
          <div className="regrouper">
            <h2 className="group-title">Meet the developers</h2>

            <div className="developers-group-holder">
              <Image
                src={developersGroup}
                alt={'Developers'}
                className= "developers-group-image"
                sizes="100vw"
              />
            </div>
            
            <p className="group-subtitle"></p>          
            <Grid container spacing={5} padding={2}>
              {developers.developers.map((developer) => (               
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Link href={developer.facebook} className="profile-link">
                      <ProfileCard key={developer.id} developer={developer} />
                    </Link>
                  </Grid>
              ))}
            </Grid>
          </div>     

               
        </div>        
      </div>
    </>    
  );
}
