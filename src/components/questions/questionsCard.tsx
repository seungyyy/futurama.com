import { Questions } from '../../types/questions';
import styled from '@emotion/styled/';
import { useState } from 'react';
import { theme } from '../../constants/theme';
interface QestionProps {
  questionData: Questions;
  number: number;
}

export const QuestionCard = ({ questionData, number }: QestionProps) => {
  const { question, possibleAnswers } = questionData;
  const [checked, setChecked] = useState<number>();

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = (event.target as HTMLInputElement).id;
    setChecked(parseInt(id));
  };

  return (
    <Container>
      <div className="quiz-box">
        <p>
          Q {number + 1}. {question}
        </p>
        {possibleAnswers.map((el, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={index.toString()}
                checked={checked ? index.toString() === `${checked}` :false}
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
  box-sizing: border-box;
  .quiz-box {
    text-align: left;
    label {
      line-height: 1.8;
      cursor: pointer;
      color: ${theme.colors.darkGrey};
    }
    input[type='checkbox'] {
      display: none;
      &:checked + label {
        color: ${theme.colors.green};
      }
    }
  }
`;
