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

  const handleClickBtn = (e: any) => {
    if (e.target.textContent === '이전') {
      setQuestion({
        start: question.start - 1,
        end: question.end - 1,
      });
    } else if (e.target.textContent === '다음') { 
      setQuestion({
        start: question.start + 1,
        end: question.end + 1,
      });
    }
  };


  console.log(question.start);
  console.log(question.end);
  if (error) return <Error />;
  if (!data) return <Loading />;
  
  return (
    <Section1>
      <Category>Quiz</Category>
      <Article>
        {data.slice(question.start, question.end).map((questionData: Questions) => {
          return (
            <QuestionCard key={`${text}-list-${questionData.id}`} questionData={questionData} />
          );
        })}
        {question.start !== 0 && <button onClick={handleClickBtn}>이전</button>}
        {question.end !== 27 && <button onClick={handleClickBtn}>다음</button>}
        {question.end === 27 && <button>결과 확인</button>}
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
  background-color: #fcfff6;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
    rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
`;
