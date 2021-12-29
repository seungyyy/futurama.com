import React from 'react';
import styled from '@emotion/styled';
import { Navigation, Footer } from '.';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Container>
        <Navigation />
        {children}
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  max-width: 1920px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  background-color: #0e0e0e;
  font-family: 'Oswald', sans-serif;
`;
