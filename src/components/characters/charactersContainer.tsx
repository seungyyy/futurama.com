import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { CharacterCard } from './charactersCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Character } from '../../types/characters';

interface CharacterContainerProps {
  text: string;
}

export const CharactersContainer = ({ text }: CharacterContainerProps) => {
  const { data, error } = useFuturamaData(text);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Section1>
      <Category>Characters</Category>
      <Article>
        {data.map((charactersData: Character) => {
          return (
          <CharacterCard key={`${text}-list-${charactersData.id}`} charactersData={charactersData} 
          />
          );
        })}
      </Article>
    </Section1>
  );
}

const Category = styled.p`
    color: #236e2d;
    font-size: 37px;
    border-bottom: 1px solid #236e2d;
`;

const Section1 = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 25px 0;
`;

const Article = styled.section`
    display: grid;
    gap: 3em;
    text-align: center;
    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
