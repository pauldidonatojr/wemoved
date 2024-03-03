// src/StyledPage.js
import styled from 'styled-components';

// This component styles the container that centers content
export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  text-align: center;
  background-color: #f0f0f0; // Light grey background
  font-family: 'Arial', sans-serif;
`;

// This styles the link
export const StyledLink = styled.a`
  color: #0077cc; // Change link color here
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;
