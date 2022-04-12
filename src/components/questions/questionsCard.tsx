import { Questions } from '../../types/questions';
import styled from '@emotion/styled/';

interface QestionProps {
  questionData: Questions;
}

export const QuestionCard = ({ questionData }: QestionProps) => { 
  const { question, possibleAnswers, correctAnswer } = questionData;

  return (
    <Container>
      <p>Q. {question}</p>
      {possibleAnswers.map((el, index) => { 
        return (
          <>
            <input type="checkbox" key={index} id={index.toString()} />
            <label htmlFor={index.toString()}>{index+1}. {el} </label>
          </>
        )
      })}
    </Container>
  );
};


const Container = styled.div`
  padding: 2rem;
`;
