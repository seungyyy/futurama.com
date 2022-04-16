import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { CharacterCard } from './charactersCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Character } from '../../types/characters';
import { theme } from '../../constants/theme';

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
  ${theme.common.category}
`;

const Section1 = styled.section`
  ${theme.common.section}
`;

const Article = styled.section`
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
