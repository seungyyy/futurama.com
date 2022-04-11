import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { QuestionCard } from './questionsCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Questions } from '../../types/questions';
import { useState } from 'react';

interface QuestionContainerProps { 
  text: string;
}

export const QuestionContainer = ({ text }: QuestionContainerProps) => { 
  const { data, error } = useFuturamaData(text);
  const [ question, setQuestion ] = useState({
    start: 0,
    end: 1,
  })


  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Section1>
      <Category>Quiz</Category>
      <Article>
        {data.slice(question.start, question.end).map((questionData: Questions) => {
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
