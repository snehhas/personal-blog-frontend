import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative;

  &:hover {
    color: #ffeb3b;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #ffeb3b;
      transition: width 0.3s ease;
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #2196F3, #21CBF3)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar>
        <Typography variant="h6">
          <StyledLink to="/">Home</StyledLink>
        </Typography>
        <Typography variant="h6">
          <StyledLink to="/about">About</StyledLink>
        </Typography>
        <Typography variant="h6">
          <StyledLink to="/projects">Projects</StyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
