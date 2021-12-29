import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { QuestionCard } from './questionsCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Questions } from '../../types/questions';

interface QuestionContainerProps { 
  text: string;
}

export const QuestionContainer = ({ text }: QuestionContainerProps) => { 
  const { data, error } = useFuturamaData(text);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Section1>
      <Category>Quiz</Category>
      <Article>
        {data.map((questionData: Questions) => {
          return (
          <QuestionCard key={`${text}-list-${questionData.id}`} questionData={questionData} 
          />
          );
        })}
      </Article>
    </Section1>
  );
};

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
  text-align: center;
`;
