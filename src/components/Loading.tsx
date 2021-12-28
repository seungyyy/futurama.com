import styled from '@emotion/styled';
import Image from 'next/image';
import lodingImg from '/public/image/loading.png';

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
    background-color: #0e0e0e;
    color: #fcfff6; 
    font-size: 1.5rem;
    text-align: center;
`;