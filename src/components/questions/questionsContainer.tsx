import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { QuestionCard } from './questionsCard';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Questions } from '../../types/questions';
import { useState } from 'react';
import { theme } from '../../constants/theme';

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
  ${theme.common.category};
`;

const Section1 = styled.section`
  ${theme.common.section}
`;

const Article = styled.section`
  position: relative;
  ${theme.common.containerShadow}
  .next-btn,
  .result-btn {
    position: absolute;
    bottom: 1.5rem;
    ${theme.common.buttonStyle}
  }
`;
