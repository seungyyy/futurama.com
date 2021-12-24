import { Cast } from '../types/cast';
import styled from '@emotion/styled';


interface CastProps {
  castData: Cast;
}

export const CastCard = ({ castData }: CastProps) => {
  const { name, born, bio } = castData;

  return (
    <Container>
      <h3>{name}</h3>
      <p>{born}</p>
      <p>{bio.url}</p>
      <p>{bio.text}</p>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 1em;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    border-radius: 1em;
`;