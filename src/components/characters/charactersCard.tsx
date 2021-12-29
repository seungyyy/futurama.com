import { Character } from '../../types/characters';
import styled from '@emotion/styled/';

interface CharacterProps {
    charactersData: Character;
}

export const CharacterCard = ({ charactersData }: CharacterProps) => {
  const { age, gender, homePlanet, sayings, name, images } = charactersData;
  
  return (
    <Container>
      <div>name: {name.first}
      {name.middle}
      {name.last}
      </div>
      <br></br>
      <img src={images.main} alt="" />
      <br></br>
      <div>gender: {gender}</div>
      <br></br>
      <div>homePlanet: {homePlanet}</div>
      <div>age: {age}</div>
      <div>sayings: {sayings[0]}</div>
    </Container>
  )
}



const Container = styled.div`
  position: relative;
  background-color: #fcfff6;
  border-radius: 6px;
  padding-bottom: 2rem;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
      rgba(49, 160, 49, 0.1) 20px 20px, rgba(49, 160, 49, 0.05) 25px 25px;
  &:hover {
    background-color: #b5b8b0;
  }
`;