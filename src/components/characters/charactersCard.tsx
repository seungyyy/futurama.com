import { Character } from '../../types/characters';
import styled from '@emotion/styled/';
import Link from 'next/link';
import { theme } from '../../constants/theme';

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
  ${theme.common.containerShadow}
  padding: 2rem 0;
  &:hover {
    background-color: ${theme.colors.lightGrey};
  }
  .more-btn {
    ${theme.common.buttonStyle}
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
  color: ${theme.colors.mint};
  font-size: 0.8em;
`;

const Female = styled.span`
  margin-left: 0.7em;
  color: ${theme.colors.pink};
  font-size: 0.8em;
`;
