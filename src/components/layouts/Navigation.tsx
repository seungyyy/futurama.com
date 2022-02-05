import styled from '@emotion/styled';
import { ROUTES } from '../../constants';
import { Route } from '../../types/Route';
import React, { useState } from 'react';
import Link from 'next/link';
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
        <Link href="/">
          <div className="logo-img">
            <Image src={logoImg} alt="logo" />
          </div>
        </Link>
        <ul className={isOn ? "hideMenu" : "showMenu"}>
          {ROUTES.map((routeObject: Route) => {
            return (
              <li key={`menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH} passHref>
                  <a className="nav-link">{routeObject.LABEL}</a>
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
  .logo-img {
    object-fit: cover;
    cursor: pointer;
  }
  flex: 2.5;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    object-fit: contain;
    transform: translateX(-50px) scale(0.8);
  }
  .menuBtn {
    display: none;
    width: 35px;
    cursor: pointer;
    @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      margin-right: -1rem;
    }
    @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
      display: block;
      margin-right: 0;
    }
  }
  ul {
    display: flex;
    width: 35%;
    justify-content: space-between;
    @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
      display: none;
    }
    .nav-link {
      color: #fcfff6;
      font-size: 20px;
      letter-spacing: 1px;
      padding-bottom: 4px;
      &:hover {
        border-bottom: 3px solid #236e2d;
      }
      @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        padding-bottom: 0;
        &:hover {
          border: none;
        }
      }
    }
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    .hideMenu {
      display: none;
    }
    .showMenu {
      display: block;
      position: fixed;
      width: 100px;
      top: 5rem;
      height: 100vh;
      right: 0;
      background-color: #0e0e0e;
      z-index: 20;
      opacity: 0.8;
      li:nth-of-type(n + 1) {
        margin-top: 0.5rem;
      }
      li {
        padding-left: 1.5rem;
      }
      li > a {
        &:hover {
          color: #236e2d;
        }
      }
    }
  }
`;
