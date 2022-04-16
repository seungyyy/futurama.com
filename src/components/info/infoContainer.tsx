import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { InfoCard } from './infoCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Info } from '../../types/info';
import { theme } from '../../constants/theme';

interface InfoProps {
  text: string;
}

export const InfoContainer = ({ text }: InfoProps) => {
  const { data, error } = useFuturamaData(text);
  

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Section1>
      <Category>Info - synopsis</Category>
      <Article>
        {data.map((infoData: Info) => {
            return (
            <InfoCard key={`${text}-list-${infoData.id}`} infoData={infoData} 
            />
            );
          })}
        </Article>
      </Section1>
  );
}

const Section1 = styled.section`
  ${theme.common.section}
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    margin-top: 9rem;
  }
`;

const Category = styled.p`
  ${theme.common.category}
`;

const Article = styled.article`
`;
