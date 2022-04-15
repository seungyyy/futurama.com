import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { QuestionCard } from './questionsCard';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Questions } from '../../types/questions';
import { useState } from 'react';

interface QuestionContainerProps { 
  text: string;
}

export const QuestionContainer = ({ text }: QuestionContainerProps) => { 
  const { data, error } = useFuturamaData(text);
  const [answer, setAnswer] = useState<any>([]);
  const [currentAnswer, setCurrentAnswer] = useState({
    currResults: '',
    failResults: '',
    currNum: 0,
  });
  const [ question, setQuestion ] = useState({
    start: 0,
    end: 1,
  })

  const handleClickBtn = (event: React.MouseEvent<HTMLElement>) => {
    let result = `${question.start + 1} ${
      data[answer.length === 0 ? 0 : parseInt(answer.slice(0, 2)) - 1].correctAnswer
      }`;
  
    if ((event.target as any).textContent === '다음') {
      setQuestion({
        start: question.start + 1,
        end: question.end + 1,
      });
      if (answer === result) {
        setCurrentAnswer({
          ...currentAnswer,
          currResults: currentAnswer.currResults + answer,
          currNum: currentAnswer.currNum + 1,
        });
      } else {
        setCurrentAnswer({
          ...currentAnswer,
          failResults: currentAnswer.failResults + answer,
        });
      }
    }
  };

  if (error) return <Error />;
  if (!data) return <Loading />;
  
  return (
    <Section1>
      <Category>Quiz</Category>
      <Article>
        {data.slice(question.start, question.end).map((questionData: Questions) => {
          return (
            <QuestionCard
              key={`${text}-list-${questionData.id}`}
              questionData={questionData}
              number={question.start}
              setAnswer={setAnswer}
            />
          );
        })}
        {question.end !== 27 && (
          <button onClick={handleClickBtn} className="next-btn">
            다음
          </button>
        )}
        {question.end === 27 && (
          <button
            className="result-btn"
            onClick={() => {
              alert(currentAnswer.currNum + '개 맞췄습니다.');
            }}
          >
            결과 확인
          </button>
        )}
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
  position: relative;
  text-align: center;
  background-color: #fcfff6;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
    rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  .next-btn {
    position: absolute;
    bottom: 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 8px;
    font-size: 0.8rem;
    color: #fcfff6;
    background-color: #f89700;
  }
  .result-btn {
    position: absolute;
    bottom: 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 8px;
    font-size: 0.8rem;
    color: #fcfff6;
    background-color: #f89700;
  }
`;
