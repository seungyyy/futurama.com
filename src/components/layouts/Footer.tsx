import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const Footer = () => {
  return (
    <Bottom>
      <div className="footerTxt">
        <a href="https://sampleapis.com/api-list/futurama">https://sampleapis.com/api-list/futurama</a>
        <p className="linkTxt">Sample APIs - Futurama</p>
      </div>
      <Copyright>© Copyright LeeSeungyeon</Copyright> 
    </Bottom>
  );
}

const Bottom = styled.footer`
  width: 95%;
  position: fixed;
  bottom: 2rem;
  left: 1rem;
  color: #fcfff6;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  letter-spacing: -1px;
  .footerTxt {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    .linkTxt {
    margin-right: 5px;
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

