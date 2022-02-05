import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

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
  margin-top: 3em;
  color: #fcfff6;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  background-color: #0e0e0e;
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
      margin-top: 15em;
    }
  }
`;

const Copyright = styled.p`
  font-size: 10px;
`;

