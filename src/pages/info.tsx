import type { NextPage } from 'next';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import Image from 'next/image';
import logoImg from '../../public/image/logo.png';
import titleImg from '../../public/image/title.png';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Info } from '../types/info';

const InfoPage: NextPage = () => {
  const title = 'info';
  const { data, error } = useFuturamaData(title);

  const [isOn, setTxt] = useState(false);

  const toggleBtn = () => {
      setTxt((isOn) => !isOn); // on,off 개념 boolean
  }; 

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
                          <Link href="/inventory">Inventory</Link>
                      </li>
                  </Ul>
              </Nav>
              <Category>Info - synopsis</Category>
              <Section2>
                  <button type="button" className="btnTranslate" onClick={() => toggleBtn()}>
                      줄거리
                  </button>
                  {data.map((infoData: Info) => {
                      const { synopsis, yearsAired } = infoData;
                      return (
                          <InfoCard key={`fututama-${title}-${infoData.id}`}>
                              <img src="https://www.thecoolector.com/wp-content/uploads/2014/01/Screen-shot-2014-01-07-at-07.41.42-1050x574.png" alt="futurama poster" />
                              <Synopsis>
                                  <span>yearsAired: Futurama {yearsAired}</span>
                                  <p>{synopsis}</p>
                                  <p className={isOn ? 'show-Txt' : 'hide-Txt'}>
                                      1999년 12월 31일 막장 생활을 달리고 있는 멍청한 피자 배달부
                                      필립 J. 프라이가 냉동보존 실험실에서 장난전화로 시킨 피자를
                                      먹다가 그 벌로 냉동캡슐로 들어가 천 년 동안 냉동인간이
                                      되어버린다. 천 년 뒤에 깨어나 보니, 세상은 자기보다 더 막장을
                                      달리고 있는 것이 아닌가? 프라이는 가족, 친구, 자기가 아는
                                      사람이 아무도 없다는 걸 알고 환호성을 지른다. 그러다가
                                      릴라라는 외눈박이 외계인(으로 알려졌으나, 사실 지하에 사는
                                      돌연변이의 자손이다)을 만난 프라이는 영웅적인 행보를 보이며
                                      자신에게 직업칩을 박으려는 릴라를 냉동캡슐에 집어넣고,
                                      알코올로 움직이며 자기보다 더 막장의 극치를 달리는 로봇인
                                      벤더와 마주치게 된다. 프라이는 벤더와 함께 도망쳐 다니다가,
                                      프라이가 한 일을 복수하러 온 릴라를 자기 편, 즉 막장화
                                      시켜버리게 된다. 직장을 잃은 그들은 일자리를 얻으려고 프라이와
                                      제일 가까운 친척인 휴버트 J. 판스워드 박사를 공갈·협박해,
                                      판스워스 교수가 소유한 운송회사인 &quot;플래닛
                                      익스프레스&ldquo;에 취직하게 된다. 그리고 그들은 랍스터와,
                                      인턴 나온 부잣집 딸, 그리고 관료주의 회계사와 함께 회사를
                                      꾸려가면서 우주와 인류를 구원(이라 적고 박살이라고
                                      읽는다)하거나, 위험한 행성(예를 들어 위뷁-7행성에 백괴사전글과
                                      그림을 배달)에 화물을 배달하면서 여러 가지 일들을 겪고 있다.
                                  </p>

                                  <a
                                      href="https://namu.wiki/w/%ED%93%A8%EC%B2%98%EB%9D%BC%EB%A7%88"
                                      className="wikiLink"
                                  >
                                      나무위키
                                  </a>
                              </Synopsis>
                          </InfoCard>
                      );
                  })}
              </Section2>
          </Section1>
          <Footer>© Copyright LeeSeungyeon</Footer>
      </Container>
  );
}


const Container = styled.main`
    width: 1920px;
    height: 100vh;
    background-color: #0e0e0e;
    font-family: 'Oswald', sans-serif;
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
  li:nth-of-type(1) {
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
    .btnTranslate {
        position: absolute;
        width: 6%;
        bottom: 20rem;
        padding: 0.4rem 0.2rem;
        right: 24rem;
        background-color: #f89700;
        border-radius: 8px;
        font-family: 'Gothic A1', sans-serif;
        font-weight: 400;
        color: #fcfff6;
        z-index: 10;
        cursor: pointer;
    }
`;

const InfoCard = styled.div`
    display: flex;
    position: relative;
    background-color: #fcfff6;
    border-radius: 6px;
    padding: 1rem;
    box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
        rgba(49, 160, 49, 0.1) 20px 20px, rgba(49, 160, 49, 0.05) 25px 25px;
    img {
      width: 50%;
      padding: 1.5rem;
      border-radius: 4px;
    }
`;

const Synopsis = styled.div`
    padding: 1.5rem;
    span {
        display: block;
        text-align: left;
        font-size: 0.8rem;
    }
    p {
        text-align: left;
    }
    .wikiLink {
        position: absolute;
        width: 8%;
        bottom: 4rem;
        padding: 0.4rem 0.2rem;
        background-color: #f89700;
        border-radius: 8px;
        font-family: 'Gothic A1', sans-serif;
        font-weight: 400;
        color: #fcfff6;
        right: 3rem;
    }
    .hide-Txt {
        display: none;
    }
    .show-Txt {
        display: block;
        position: absolute;
        top: 1rem;
        transform: translateX(-3%);
        padding: 0.5rem;
        line-height: 1.5;
        background-color: #fcfff6;
        z-index: 10;
    }
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


export default InfoPage;
