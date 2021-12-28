import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import logoImg from '../../public/image/logo.png';
import title from '../../public/image/title.png';
import titleImg from '../../public/image/titleImg.png';
import storyImg from '../../public/image/story.png';

const FuturamaIndexPage: NextPage = () => {
  return (
      <Container>
          <Sections>
              <GreenTitle>
                  <Image src={title} alt="futurama image" />
              </GreenTitle>
              <Nav>
                  <Alink href="/">
                      <Image src={logoImg} alt="logo" />
                  </Alink>
                  <Ul>
                      <li>
                          <Link href="/info">Info</Link>
                      </li>
                      <li>
                          <Link href="/characters">Characters</Link>
                      </li>
                      <li>
                          <Link href="/episodes">Episodes</Link>
                      </li>
                      <li>
                          <Link href="/cast">Cast</Link>
                      </li>
                      <li>
                          <Link href="/questions">Qiuz</Link>
                      </li>
                      <li>
                          <Link href="/inventory">Inventory</Link>
                      </li>
                  </Ul>
              </Nav>
              <Wrapper>
                  <Image src={titleImg} alt="futurama image" />
                  <Storytxt>
                      <Image
                          src={storyImg}
                          alt="퓨처라마는 일반적으로 플래닛 익스프레스라는 배송 회사의 직원들이 하는 모험이나 행동을 모은 시트콤이다."
                      />
                  </Storytxt>
              </Wrapper>
          </Sections>
          <Footer>© Copyright LeeSeungyeon</Footer>
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

const Alink = styled.a`

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8rem 0 0;
  img {
    object-fit: contain;
  }
`;

const GreenTitle = styled.div`
  position: absolute;
  transform: translate(720px, 18px);
`;

const Storytxt = styled.div`
  margin: 120px auto 0;
`;

const Footer = styled.footer`
  width: 95%;
  position: fixed;
  bottom: 4rem;
  left: 1rem;
  font-size: 10px;
  color: #fcfff6;
  text-align: center;
`;

export default FuturamaIndexPage;
