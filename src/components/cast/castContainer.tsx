import styled from '@emotion/styled';
import { Error, Loading, } from '..';
import { CastCard } from './castCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Cast } from '../../types/cast';
import { theme } from '../../constants/theme';

interface CastContainerProps {
  text: string;
}

export const CastContainer = ({ text }: CastContainerProps) => {
  const { data, error } = useFuturamaData(text);

  if (error) return <Error />;
  if (!data) return <Loading />;


  return (
    <Section1>
      <Category>Cast</Category>
      <Article>
        {data.map((castData: Cast) => {
          return (
          <CastCard key={`${text}-list-${castData.id}`} castData={castData} 
          />
          );
        })}
      </Article>
    </Section1>
  );
};

const Category = styled.p`
  ${theme.common.category}
`;

const Section1 = styled.section`
  ${theme.common.section}
`;

const Article = styled.section`
    display: grid;
    gap: 3em;
    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;



