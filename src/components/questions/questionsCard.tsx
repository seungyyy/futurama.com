import { Questions } from '../../types/questions';
import styled from '@emotion/styled/';
import { useState } from 'react';

interface QestionProps {
  questionData: Questions;
  number: number;
  setAnswer: (text: string) => void;
}

export const QuestionCard = ({ questionData, number, setAnswer }: QestionProps) => {
  const { question, possibleAnswers, correctAnswer } = questionData;
  const [checked, setChecked] = useState(0);

  const changeInput = (event: React.ChangeEvent) => {
    setChecked((event.target as any).id);
    setAnswer(number + 1 + (event.target as any).parentElement.textContent.slice(2));
  };

  return (
    <Container>
      <div className="quiz-box">
        <p>Q {number+1}. {question}</p>
        {possibleAnswers.map((el, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={index.toString()}
                checked={index.toString() === checked.toString()}
                onChange={changeInput}
              />
              <label htmlFor={index.toString()}>
                {index + 1}. {el}
              </label>
            </li>
          );
        })}
      </div>
    </Container>
  );
};


const Container = styled.div`
  padding: 2rem;
  .quiz-box {
    width: 500px;
    text-align: left;
    label {
      line-height: 1.8;
      cursor: pointer;
      color: #9c9b9b;
    }
    input[type='checkbox'] {
      display: none;
      &:checked + label {
        color: #236e2d;
      }
    }
  }
`;
