import styled from '@emotion/styled';
import { ROUTES } from '../../constants';
import { Route } from '../../types/Route';
import React, { useState } from 'react';
import Image from 'next/image';
import logoImg from '../../../public/image/logo.png';
import titleImg from '../../../public/image/title.png';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const Navigation = () => {
  const [isOn, setMenu] = useState(true);

  const toggleBtn = () => {
      setMenu((isOn) => !isOn); // on,off 개념 boolean
  };

  return(
    <header>
      <Nav>
        <Alink href="/">
          <Image src={logoImg} alt="logo" />
        </Alink>
        <Logoimg>
          <Image src={titleImg} alt="futurama image" />
        </Logoimg>
        <ul className={isOn ? "hideMenu" : "showMenu"}>
          {ROUTES.map((routeObject: Route) => {
            return (
              <li key={`menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <button type="button" className="menuBtn" onClick={() => toggleBtn()}><img src={`/image/menuIcon.png`} alt="menu button" /></button>  
      </Nav>
    </header>
  )
}

const Logoimg = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  max-width: 1920px;
  position: relative;
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding-top: 2rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .menuBtn {
    display: none;
    width: 35px;
    margin-right: -3rem;
    cursor: pointer;
    @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      margin-right: -1.5rem;
    }
    @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
      display: block;
    }
  }
  ul {
    display: flex;
    width: 35%;
    justify-content: space-between;
    @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
      display: none;
    }
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    .hideMenu {
      display: none;
    }
    .showMenu {
      display: block;
      width: 150px;
      height: 100vh;
      position: absolute;
      flex-direction: column;
      justify-content: flex-start;
      top: 6rem;
      right: -3rem;
      text-align: right;
      z-index: 10;
      background-color: #0e0e0e;
      opacity: .8;
      li:nth-of-type(n+1) {
        margin-top: 0.5rem;
      }
      @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        padding-right: 1.5rem;
      }
    }
  }
`;

const Alink = styled.a`
  flex: 2.5;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    flex: 0.9;
    
  }
`;

const Link = styled.a`
  color: #fcfff6;
  font-size: 20px;
  letter-spacing: 1px;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 3px solid #236e2d;
  }
`;
