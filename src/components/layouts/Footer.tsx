import styled from '@emotion/styled';

export const Footer = () => {
  return (
      <Bottom>
          <div className="footerTxt">
              <p>
                  Sample APIs <strong>Futurama</strong>
              </p>
              <a href="https://sampleapis.com/api-list/futurama">
                  https://sampleapis.com/api-list/futurama
              </a>
          </div>
          <Copyright>© Copyright LeeSeungyeon</Copyright>
      </Bottom>
  );
}

const Bottom = styled.footer`
    max-width: 1920px;
    padding: 4rem 0 1rem;
    background-color: #0e0e0e;
    color: #fcfff6;
    text-align: center;
    font-family: 'Gothic A1', sans-serif;
    .footerTxt {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        a {
          margin-left: 5px;
        }
    }
`;

const Copyright = styled.p`
  margin-top: -0.2rem;
  font-size: 10px;
`;
