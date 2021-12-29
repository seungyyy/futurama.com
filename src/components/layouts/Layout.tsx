import React from 'react';
import styled from '@emotion/styled';
import { Navigation, Footer } from '.';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  max-width: 1920px;
  height: 100%;
  background-color: #0e0e0e;
  font-family: 'Oswald', sans-serif;
  margin: 0 auto;
`;
