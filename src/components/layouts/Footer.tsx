import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const Footer = () => {
  return (
    <Bottom>
      <div className="footerTxt">
        <a href="https://sampleapis.com/api-list/futurama">
          https://sampleapis.com/api-list/futurama
        </a>
        <p>
          Sample APIs <strong>Futurama</strong>
        </p>
      </div>
      <Copyright>© Copyright LeeSeungyeon</Copyright>
    </Bottom>
  );
}

const Bottom = styled.footer`
  max-width: 1920px;
  padding: 0 0 1rem;
  margin-top: 3rem;
  background-color: #0e0e0e;
  color: #fcfff6;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  .footerTxt {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    p {
      margin-left: 5px;
      @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        margin: 5px 0 17px;
      }
    } 
    @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      flex-direction: column;
    }
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-top: 15rem;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    margin-top: 15rem;
  }
`;

const Copyright = styled.p`
  margin-top: -0.2rem;
  font-size: 10px;
`;
