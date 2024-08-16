import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, Link } from '@mui/material';
import bloodDonationImage from '../assets/blood.avif'; 
import volunteersImage from '../assets/homepage-bg.jpg'; 
import missionImage from '../assets/donate-blood.jpg'; 
import './About.css'; 

const About = () => {
  return (
    <Container maxWidth="lg" className="about-page">
      <Box className="background-video">
        <iframe
          className="video-background"
          src="https://www.youtube.com/embed/9FmGrQ3q9Gk?autoplay=1&loop=1&playlist=9FmGrQ3q9Gk&controls=0&mute=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </Box>
      
      <Typography variant="h1" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Welcome to the Blood Bank Management System, where our mission is to facilitate the efficient and safe donation and management of blood. We work with hospitals, donors, and volunteers to ensure that blood is available for those in need and to help save lives.
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={missionImage}
              alt="Our Mission"
            />
            <CardContent>
              <Typography variant="h5" component="h2" color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                Our goal is to ensure that every patient in need of blood can receive it promptly and safely. We aim to:
              </Typography>
              <ul>
                <li>Provide a seamless donation experience for blood donors.</li>
                <li>Maintain a well-organized system for managing blood supply.</li>
                <li>Educate and encourage more people to become regular blood donors.</li>
                <li>Collaborate with healthcare providers to ensure blood is distributed where it's most needed.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={bloodDonationImage}
              alt="Donate Blood"
            />
            <CardContent>
              <Typography variant="h5" component="h2" color="primary">
                How You Can Help
              </Typography>
              <Typography variant="body1" paragraph>
                There are several ways you can contribute to our mission:
              </Typography>
              <ul>
                <li><strong>Donate Blood:</strong> Schedule an appointment to donate blood and help save lives.</li>
                <li><strong>Volunteer:</strong> Get involved in organizing blood donation camps and awareness programs.</li>
                <li><strong>Spread the Word:</strong> Share information about the importance of blood donation with friends and family.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={volunteersImage}
              alt="Volunteers"
            />
            <CardContent>
              <Typography variant="h5" component="h2" color="primary">
                Contact Us
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions or need more information, please feel free to contact us at:
              </Typography>
              <ul>
                <li>Email: <Link href="mailto:info@bloodbank.com" color="primary">info@bloodbank.com</Link></li>
                <li>Phone: +1-234-567-890</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/login-choice"
        >
          Get in Touch
        </Button>
      </Box>
    </Container>
  );
}

export default About;
