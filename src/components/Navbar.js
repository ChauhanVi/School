import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Springdale Public School
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about-us">About Us</Button>
        <Button color="inherit" component={Link} to="/academics">Academics</Button>
        <Button color="inherit" component={Link} to="/admissions">Admissions</Button>
        <Button color="inherit" component={Link} to="/faculty">Faculty</Button>
        <Button color="inherit" component={Link} to="/students">Students</Button>
        <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
        <Button color="inherit" component={Link} to="/contact-us">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
