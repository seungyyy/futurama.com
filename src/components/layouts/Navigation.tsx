import styled from '@emotion/styled';
import { ROUTES } from '../../constants';
import Image from 'next/image';
import logoImg from '../../public/image/logo.png';
import titleImg from '../../public/image/title.png';
import { MEDIA_QUERY_END_POINT } from '../../constants';

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return(
    <header>
      <Nav>
        <Logoimg>
          <Image src={titleImg} alt="futurama image" />
        </Logoimg>
        <Alink href="/">
          <Image src={logoImg} alt="logo" />
        </Alink>
        <Ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={`menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </li>
            );
            })}
        </Ul>
      </Nav>
    </header>
  )
}

const Logoimg = styled.div`
    position: absolute;
    transform: translate(720px, 18px);
`;

const Nav = styled.nav`
  max-width: 1920px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const Alink = styled.a``;


const Ul = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const Link = styled.a`
    color: #fcfff6;
    font-size: 20px;
    &:hover {
        border-bottom: 3px solid #236e2d;
    }
`;