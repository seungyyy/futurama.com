import React, { useState } from 'react';
import { Info } from '../../types/info';
import styled from '@emotion/styled/';
import Image from 'next/image';
import  PostImg  from '../../../public/image/poster.png';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { theme } from '../../constants/theme';

interface InfoProps {
    infoData: Info;
}

export const InfoCard = ({ infoData }: InfoProps) => {
  const { synopsis, yearsAired } = infoData;
  const [isOn, setTxt] = useState<boolean>(false);

  const toggleBtn = () => {
      setTxt((isOn) => !isOn); 
  };

    return (
      <Container>
        <div className="post-box">
          <Image src={PostImg} alt="futurama poster" />
        </div>
        <Synopsis>
          <span>yearsAired: Futurama {yearsAired}</span>
          <p>{synopsis}</p>
          <p className={isOn ? 'show-Txt' : 'hide-Txt'}>
            1999년 12월 31일 막장 생활을 달리고 있는 멍청한 피자 배달부 필립 J. 프라이가 냉동보존
            실험실에서 장난전화로 시킨 피자를 먹다가 그 벌로 냉동캡슐로 들어가 천 년 동안 냉동인간이
            되어버린다. 천 년 뒤에 깨어나 보니, 세상은 자기보다 더 막장을 달리고 있는 것이 아닌가?
            프라이는 가족, 친구, 자기가 아는 사람이 아무도 없다는 걸 알고 환호성을 지른다. 그러다가
            릴라라는 외눈박이 외계인(으로 알려졌으나, 사실 지하에 사는 돌연변이의 자손이다)을 만난
            프라이는 영웅적인 행보를 보이며 자신에게 직업칩을 박으려는 릴라를 냉동캡슐에 집어넣고,
            알코올로 움직이며 자기보다 더 막장의 극치를 달리는 로봇인 벤더와 마주치게 된다. 프라이는
            벤더와 함께 도망쳐 다니다가, 프라이가 한 일을 복수하러 온 릴라를 자기 편, 즉 막장화
            시켜버리게 된다. 직장을 잃은 그들은 일자리를 얻으려고 프라이와 제일 가까운 친척인 휴버트
            J. 판스워드 박사를 공갈·협박해, 판스워스 교수가 소유한 운송회사인 &quot;플래닛
            익스프레스&ldquo;에 취직하게 된다. 그리고 그들은 랍스터와, 인턴 나온 부잣집 딸, 그리고
            관료주의 회계사와 함께 회사를 꾸려가면서 우주와 인류를 구원(이라 적고 박살이라고
            읽는다)하거나, 위험한 행성(예를 들어 위뷁-7행성에 백괴사전글과 그림을 배달)에 화물을
            배달하면서 여러 가지 일들을 겪고 있다.
          </p>
          <div className="btn-box">
            <button type="button" className="btnTranslate" onClick={() => toggleBtn()}>
              줄거리
            </button>
            <a href="https://namu.wiki/w/%ED%93%A8%EC%B2%98%EB%9D%BC%EB%A7%88" className="wikiLink">
              나무위키
            </a>
          </div>
        </Synopsis>
      </Container>
    );
};

const Container = styled.div`
  position: relative;
  padding: 1rem 0 4rem 0;
  background-color: ${theme.colors.white};
  border-radius: 6px;
  box-shadow: ${theme.common.boxShadow};
  box-sizing: border-box;
  &:after {
    display: block;
    content: '';
    clear: both;
  }
  .post-box {
    padding: 1.5rem 0 0 1.5rem;
    width: 41vw;
    float: left;
    box-sizing: border-box;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    flex-direction: column;
    .post-box {
      padding: 1.5em 0 0;
      object-fit: contain;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

const Synopsis = styled.div`
  width: 47%;
  float: right;
  position: relative;
  padding: 1.5rem 2rem 1.5rem 1rem;
  font-size: 1.2rem;
  box-sizing: border-box;
  span {
    font-size: 0.8rem;
    vertical-align: top;
  }
  p {
    margin-top: 0.2em;
  }
  .btn-box {
    position: absolute;
    bottom: -2.1rem;
    right: 2em;
    .btnTranslate,
    .wikiLink {
      ${theme.common.buttonStyle}
      cursor: pointer;
    }
    .btnTranslate {
      margin-right: 1.5em;
    }
  }
  .hide-Txt {
    display: none;
  }
  .show-Txt {
    display: block;
    position: absolute;
    top: 0;
    transform: translateX(-3%);
    padding: 1rem 1rem 0;
    line-height: 1.7em;
    background-color: ${theme.colors.white};
    font-size: 1.11rem;
    z-index: 10;
    box-sizing: border-box;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: auto;
    float: left;
    span {
      padding: 1rem;
      box-sizing: border-box;
    }
    p {
      box-sizing: border-box;
      padding-left: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
    }
    .show-Txt {
      padding: 1.5em 1.5em 0;
      left: 1.5em;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
    }
  }
`;
