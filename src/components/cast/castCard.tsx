import { Cast } from '../../types/cast';
import styled from '@emotion/styled/';

interface CastProps {
  castData: Cast;
}

export const CastCard = ({ castData }: CastProps) => {
  const { name, born, bio } = castData;

  return (
    <Container>
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
    </Container>
  );
}


const Container = styled.div`
    position: relative;
    background-color: #fcfff6;
    border-radius: 6px;
    padding-bottom: 2rem;
    box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
        rgba(49, 160, 49, 0.1) 20px 20px, rgba(49, 160, 49, 0.05) 25px 25px;
    .castName {
        display: inline-block;
        margin-right: 0.4rem;
    }
    .bornTxt {
        display: inline-block;
        font-size: 0.7rem;
    }
    .bioLink {
        display: block;
        width: 18%;
        margin: 0 auto;
        padding: 0.2rem 0.1rem;
        background-color: #f89700;
        border-radius: 6px;
        font-family: 'Gothic A1', sans-serif;
        font-weight: 400;
        color: #fcfff6;
    }
    &:hover {
        background-color: #b5b8b0;
    }
`;