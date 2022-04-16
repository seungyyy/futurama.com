import styled from '@emotion/styled';
import { ROUTES } from '../../constants';
import { Route } from '../../types/Route';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/image/logo.png';
import { theme } from '../../constants/theme';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const Navigation = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleBtn = () => {
      setIsOn(!isOn); // on,off 개념 boolean
  };

  return (
    <header>
      <Nav>
        <Link href="/">
          <div className="logo-img">
            <Image src={logoImg} alt="logo" />
          </div>
        </Link>
        <ul className={isOn ? 'hideMenu' : 'showMenu'} onClick={toggleBtn}>
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
        <button type="button" className="menuBtn" onClick={toggleBtn}>
          <img src={`/image/menuIcon.png`} alt="menu button" />
        </button>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  max-width: 1920px;
  position: relative;
  width: 80%;
  display: flex;
  margin: 0 auto 1rem;
  padding-top: 2rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .logo-img {
    object-fit: cover;
    cursor: pointer;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    object-fit: contain;
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
      color: ${theme.colors.white};
      font-size: 20px;
      letter-spacing: 1px;
      padding-bottom: 4px;
      box-sizing: border-box;
      &:hover {
        border-bottom: 3px solid ${theme.colors.green};
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
      width: 150px;
      top: 5rem;
      height: 100vh;
      right: 10px;
      padding: 0;
      background-color: ${theme.colors.black};
      z-index: 30;
      opacity: 0.8;
      li:nth-of-type(n + 1) {
        margin-top: 0.5rem;
      }
      li {
        padding-left: 1.5rem;
        box-sizing: border-box;
      }
      li > a {
        &:hover {
          color: ${theme.colors.green};
        }
      }
    }
  }
`;
