import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import titleImg from '../../public/image/titleImg.png';
import storyImg from '../../public/image/story.png';

const FuturamaIndexPage: NextPage = () => {
  return (
      <Container>
          <Sections>

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


const Storytxt = styled.div`
  margin: 120px auto 0;
`;


export default FuturamaIndexPage;
