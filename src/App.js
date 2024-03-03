// src/App.js
import React from 'react';
import { CenteredContent, StyledLink } from './StyledPage';

function App() {
  return (
    <CenteredContent>
      <div>
        <h1>We've moved!</h1>
        <StyledLink href="https://cutthecable.org" target="_blank" rel="noopener noreferrer">
          Visit our new website
        </StyledLink>
      </div>
    </CenteredContent>
  );
}

export default App;
