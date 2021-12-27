import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import logoImg from '../pages/image/logo.png';
import titleImg from '../pages/image/titleImg.png';
import storyImg from '../pages/image/story.png';
import title from '../pages/image/title.png';

const FuturamaIndexPage: NextPage = () => {
  return (
      <Container>
          <Sections>
              <Nav>
                  <a href="/">
                      <Image src={logoImg} alt="logo" />
                  </a>
                  <Ul>
                      <li>
                          <Link href="/futurama/info">Info</Link>
                      </li>
                      <li>
                          <Link href="/futurama/characters">Characters</Link>
                      </li>
                      <li>
                          <Link href="/futurama/episodes">Episodes</Link>
                      </li>
                      <li>
                          <Link href="/futurama/cast">Cast</Link>
                      </li>
                      <li>
                          <Link href="/futurama/questions">Qiuz</Link>
                      </li>
                      <li>
                          <Link href="/futurama/Inventory">Inventory</Link>
                      </li>
                  </Ul>
              </Nav>
              <Wrapper>
                  <Image src={titleImg} alt="futurama image" />
                  <Logoimg>
                      <Image src={title} alt="futurama image" />
                  </Logoimg>
              </Wrapper>
              <Storytxt>
                  <Image
                      src={storyImg}
                      alt="퓨처라마는 일반적으로 플래닛 익스프레스라는 배송 회사의 직원들이 하는 모험이나 행동을 모은 시트콤이다."
                  />
              </Storytxt>
          </Sections>
      </Container>
  );
}

const Container = styled.main`
  width: 1920px;
  height: 100vh;
  background-color: #0e0e0e;
`;

const Sections = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 25px 0;
`;

const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Ul = styled.ul`
    display: flex;
    width: 40%;
    justify-content: space-between;
`;

const Link = styled.a`
  color: #fcfff6;
  font-size: 20px;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 3px solid #236e2d;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 120px auto 20px;
  width: 70%;
`;

const Logoimg = styled.div`
  position: absolute;
  transform: translate(445px, -582px);
`;

const Storytxt = styled.div`
  margin: 120px auto 0;
  width: 40%;
`;


export default FuturamaIndexPage;
