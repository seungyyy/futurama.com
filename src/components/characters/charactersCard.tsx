import { Character } from '../../types/characters';
import styled from '@emotion/styled/';
import Link from 'next/link';
interface CharacterProps {
    charactersData: Character;
}

export const CharacterCard = ({ charactersData }: CharacterProps) => {
  const {gender, name, images, id } = charactersData;

  return (
    <Container>
      <ImgBox>
        <img src={images.main} alt="캐릭터이미지" />
      </ImgBox>
      <NameTxt>
        {name.first}
        {name.middle}
        {name.last}
        <div className="genderBox">
          {gender == 'Male' ? <Male>Male</Male> : <Female>Female</Female>}
        </div>
      </NameTxt>
      <Link href={`/characters/${id}`} passHref>
        <a className="more-btn">더보기</a>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fcfff6;
  border-radius: 6px;
  padding: 2rem 0;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
    rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  &:hover {
    background-color: #b5b8b0;
  }
  .more-btn {
    padding: 0.5em 1em;
    border-radius: 8px;
    font-size: .8rem;
    color: #fcfff6;
    background-color: #f89700;
  }
`;

const ImgBox = styled.div`
    max-width: 360px;
    max-height: 250px;
    img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
    }
`;

const NameTxt = styled.div`
    margin: 6em 0 .7em;
    font-size: 1.2em;
    letter-spacing: 0.5px;
    .genderBox {
        border-radius: 10px;
        display: inline-block;
    }
`;

const Male = styled.span`
    margin-left: 0.7em;
    color: #00e6c7;
    font-size: 0.8em;
`;

const Female = styled.span`
    margin-left: 0.7em;
    color: pink;
    font-size: 0.8em;
`;
