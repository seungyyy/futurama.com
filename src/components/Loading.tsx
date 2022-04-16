import styled from '@emotion/styled';
import Image from 'next/image';
import lodingImg from '/public/image/loading.png';
import { theme } from '../constants/theme';


export const Loading = () => {
    return (
        <Load>
            <Image src={lodingImg} alt="로딩중" />
            Loading...
        </Load>
    );
};


const Load = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 100px 0;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
  box-sizing: border-box;
`;