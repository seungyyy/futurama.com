import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { theme } from '../../constants/theme';

export const Footer = () => {
  return (
    <Bottom>
      <div className="footerTxt">
        <a href="https://sampleapis.com/api-list/futurama">https://sampleapis.com/api-list/futurama</a>
        <p className="linkTxt">Sample APIs - Futurama</p>
        <Copyright>© Copyright LeeSeungyeon</Copyright> 
      </div>
    </Bottom>
  );
}

const Bottom = styled.footer`
  padding: 3.5rem 0 0.7rem;
  color: ${theme.colors.white};
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  background-color: ${theme.colors.black};
  box-sizing: border-box;
  .footerTxt {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    .linkTxt {
      margin: 0 0.7em;
      @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        margin: 2px 0;
      }
    }
    @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      flex-direction: column;
    }
  }
`;

const Copyright = styled.p`
  font-size: 10px;
`;

