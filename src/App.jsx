// src/ComingSoon.js
import React, { useState } from "react";
import styled from "styled-components";
// At the top of your ComingSoon.js file
import mainBackground from "./assets/main_background.jpg";
import { TypeAnimation } from "react-type-animation";
import logoImage from "./assets/logo2.png";

const Container = styled.div`
  box-sizing: border-box;
  max-width: 100%; // Instead of width, ensures it doesn't exceed viewport width
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${mainBackground}); // Add this line
  background-size: cover; // Cover the entire page
  background-position: center; // Center the background image  color: white;
  text-align: center;
  position: relative; // Make sure this line is added
  &:before {
    // Add this block
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); // Adjust the color and opacity to your liking
    z-index: 0;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 20px;
  color: white; // Ensure text color is set to white for contrast
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); // Add this line
  z-index: 1;
  &.hide {
    display: none;
  } 
`;

const Description = styled.p`
  font-size: 18px;
  color: white; // Ensure text color is set to white for contrast
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); // Add this line
  z-index: 1;
  &.hide {
    display: none;
  }
`;

const NavBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); // Faint transparent background
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  @media (max-width: 768px) {
    // Adjust for mobile devices
    padding: 10px 10px; // Reduce padding on smaller screens
  }
`;

const Logo = styled.img`
  font-size: 24px;
  color: white;
  height: 50px; // Adjust the height as needed
  width: auto; // This will maintain the aspect ratio of the image
  margin-left: 20px;
`;

const LgNavItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%; // Adjust based on your needs
  @media (max-width: 768px) {
    // Adjust for mobile devices
    display: none; // Reduce padding on smaller screens
  }
`;

const LgNavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ddd; // Change as needed
  }
`;

const HamburgerIcon = styled.div`
  display: none; // Hidden by default
  font-size: 24px;
  cursor: pointer;
  color: white;
  padding:5px;
  @media (max-width: 768px) {
    display: block; // Only show on mobile devices
  }
  &.hide {
    display: none;
  }
`;

const MobileNavMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.4); // Semi-transparent black background
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px; // Space for the close icon
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index:5;
  &.open {
    transform: translateX(0);
  }
`;

const MobileNavItems = styled.div`
  height: 40vh;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  width: 40%; // Adjust based on your needs
  @media (min-width: 768px) {
    // Adjust for mobile devices
    display: none; // Reduce padding on smaller screens
  }
`;

const MobileNavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ddd; // Change as needed
  }
`;

const CloseIcon = styled.div`
  font-size: 24px;
  color: white;
  position: absolute;
  top: 20px;
  right: 10px;
  margin-right: 20px;
  cursor: pointer;
  // Add shadow for elevated effect
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Adjust as needed
  // Optional: add a transition for a smooth effect when interacting
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-2px); // Slightly raise the icon on hover for more depth
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6); // Make the shadow darker on hover
  }
`;

const Footer = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  color:white;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); // Faint transparent background
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  @media (max-width: 768px) {
    // Adjust for mobile devices
    padding: 10px 10px; // Reduce padding on smaller screens
  }
`;


const ComingSoon = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <>
      <NavBar>
        <Logo src={logoImage} alt="NUOS Logo" />
        <LgNavItems>
          <LgNavItem href="#home">Home</LgNavItem>
          <LgNavItem href="#about">About</LgNavItem>
          <LgNavItem href="#services">Services</LgNavItem>
          <LgNavItem href="#contact">Contact</LgNavItem>
        </LgNavItems>
        <HamburgerIcon className={isMobileNavVisible ? "hide" : ""} onClick={() => setIsMobileNavVisible(true)}>
          ☰
        </HamburgerIcon>
      </NavBar>
      <MobileNavMenu className={isMobileNavVisible ? "open" : ""}>
        <CloseIcon onClick={() => setIsMobileNavVisible(false)}>X</CloseIcon>
        <MobileNavItems>
          <MobileNavItem href="#home">Home</MobileNavItem>
          <MobileNavItem href="#about">About</MobileNavItem>
          <MobileNavItem href="#services">Services</MobileNavItem>
          <MobileNavItem href="#contact">Contact</MobileNavItem>
        </MobileNavItems>
      </MobileNavMenu>
      <Container>
        <Title  className={isMobileNavVisible ? "hide" : ""}>
          <TypeAnimation
            sequence={[
              "NUOS Magicko", // Text 1
              1000, // Pause after Text 1
              "", // Clear Text 1
              1000, // Pause before showing Text 2 (adjust this value as needed)
              "Coming Soon", // Text 2
              1000, // Pause after Text 2 (adjust or remove this based on your preference)
            ]}
            wrapper="span" // Wrap text in a span (this is default)
            cursor={true} // Show cursor
            repeat={Infinity} // Repeat animation
          />
        </Title>
        <Description className={isMobileNavVisible ? "hide" : ""}>
          NUOS's website is under construction. We'll be here soon with our new
          awesome site.
        </Description>
      </Container>s 
      <Footer>
        <Description>NUOS Gmail : account@realmagicko.com</Description>
      </Footer>
    </>
  );
};

export default ComingSoon;
