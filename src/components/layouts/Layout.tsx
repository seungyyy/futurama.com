import React from 'react';
import styled from '@emotion/styled';
import { Navigation, Footer } from '.';
import { theme } from '../../constants/theme';

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
  position: relative;
  margin: 0 auto;
  background-color: ${theme.colors.black};
`;
