import type { NextPage } from 'next';
import { MEDIA_QUERY_END_POINT } from '../constants';
import styled from '@emotion/styled';
import Image from 'next/image';
import titleImg from '../../public/image/titleImg.png';
import storyImg from '../../public/image/story.png';

const FuturamaIndexPage: NextPage = () => {
  return (
    <Wrapper>
      <Image src={titleImg} alt="futurama image" />
      <Storytxt>
        <Image
          src={storyImg}
          alt="퓨처라마는 일반적으로 플래닛 익스프레스라는 배송 회사의 직원들이 하는 모험이나 행동을 모은 시트콤이다."
        />
      </Storytxt>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8rem 0 0;
  img {
    object-fit: contain;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    max-width: 80%;
    margin: 9rem auto 0;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    max-width: 80%;
    margin: 9rem auto 0;
  }
`;

const Storytxt = styled.div`
  margin: 9rem auto 0;
`;

export default FuturamaIndexPage;
