import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import logoImg from '/public/image/logo.png';
import titleImg from '/public/image/title.png';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Info } from '../types/info';



const InfoPage: NextPage = () => {
  const title = 'info';
  const { data, error } = useFuturamaData(title);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      <Logoimg>
        <Image src={titleImg} alt="futurama image" />
      </Logoimg>
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
            <Link href="/Inventory">Inventory</Link>
          </li>
        </Ul>
      </Nav>
      <Sections>
        {data.map((infoData: Info) => {
            const { synopsis, yearsAired } = infoData;

            return (
                <div key={`fututama-${title}-${infoData.id}`}>
                    <div>synopsis: {synopsis}</div>
                    <br></br>
                    <div>yearsAired: {yearsAired}</div>
                </div>
            );
        })}
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





export default InfoPage;
