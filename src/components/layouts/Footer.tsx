import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <Bottom>
      <div className="footerTxt">
        <p>Sample APIs <strong>Futurama</strong></p>
        <p>[Link]https://sampleapis.com/api-list/futurama</p>
      </div>
      <Copyright>© Copyright LeeSeungyeon</Copyright> 
    </Bottom>
  );
}

const Bottom = styled.footer`
    width: 95%;
    position: fixed;
    bottom: 4rem;
    left: 1rem;
    color: #fcfff6;
    text-align: center;
    .footerTxt {
        display: flex;
        justify-content: center;
        font-size: 12px;
    }
`;

const Copyright = styled.p`
  font-size: 10px;
`;
