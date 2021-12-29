import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { InfoCard } from './infoCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Info } from '../../types/info';

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

const Article = styled.article`
`;
