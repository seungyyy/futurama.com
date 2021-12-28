import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import logoImg from '../../public/image/logo.png';
import titleImg from '../../public/image/title.png';
import { Error, Loading } from '../components';
import { MEDIA_QUERY_END_POINT } from '../constants';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Cast } from '../types/cast';


const CastPage: NextPage = () => {
  const title = 'cast';
  const { data, error } = useFuturamaData(title);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      <Section1>
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
      <Category>Cast</Category>
      <Section2>
        {data.map((castData: Cast) => {
            const { name, born, bio } = castData;
            return (
                <CastCard key={`${title}-${castData.id}`}>
                    <h3 className="castName">{name}</h3>
                    <p className="bornTxt">
                        {born?.split('/').find((item) => item.length === 4)}.
                        {born
                            ?.split('/')
                            .filter((item) => item.length !== 4)
                            .join('.')}
                    </p>
                    <a href={bio.url} className="bioLink">
                        더보기
                    </a>
                </CastCard>
            );
          })}
      </Section2>
      </Section1>
    </Container>
  );
};

const Container = styled.main`
    width: 1920px;
    height: 100%;
    background-color: #0e0e0e;
`;

const Section1 = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 25px 0;
`;

const Logoimg = styled.div`
    position: absolute;
    transform: translate(720px, 18px);
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
`;

const Alink = styled.a`
`;

const Category = styled.p`
  color: #236e2d;
  font-size: 37px;
  border-bottom: 1px solid #236e2d;
`;


const Ul = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-between;
  li:nth-of-type(4) {
    border-bottom: 3px solid #236e2d;
    &:hover {
      border: none;
  }
}
`;

const Link = styled.a`
    color: #fcfff6;
    font-size: 20px;
    padding-bottom: 4px;
    &:hover {
        border-bottom: 3px solid #236e2d;
    }
`;

const Section2 = styled.section`
    display: grid;
    gap: 3em;
    text-align: center;
    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const CastCard = styled.div`
  position: relative;
  background-color: #fcfff6;
  border-radius: 6px;
  padding-bottom: 3rem;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
         rgba(49, 160, 49, 0.1) 20px 20px,
        rgba(49, 160, 49, 0.05) 25px 25px;
  .castName {
    display: inline-block;
    margin-right: .4rem;
  }
  .bornTxt {
    display: inline-block;
    font-size: .7rem;
  }
  .bioLink {
    position: absolute;
    width: 15%;
    bottom: 1rem;
    left: 13rem;
    padding: 0.2rem 0.2rem;
    background-color: #F89700;
    border-radius: 6px;
  }
  &:hover {
    background-color: #b5b8b0;
  }
`;



export default CastPage;
