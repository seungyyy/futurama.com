import { Cast } from '../../types/cast';
import styled from '@emotion/styled/';
import { theme } from '../../constants/theme';

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
  ${theme.common.containerShadow}
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
    width: 19%;
    margin: 0 auto;
    padding: 0.2rem 0.1rem;
    background-color: ${theme.colors.orange};
    border-radius: 6px;
    font-family: 'Gothic A1', sans-serif;
    font-weight: 400;
    color: ${theme.colors.white};
  }
  &:hover {
    background-color: ${theme.colors.middleGrey};
  }
`;