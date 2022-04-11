import { Questions } from '../../types/questions';
import styled from '@emotion/styled/';

interface QestionProps {
  questionData: Questions;
}

export const QuestionCard = ({ questionData }: QestionProps) => { 
  const { question, correctAnswer } = questionData;

  return (
    <Container>
      <p>Q. {question}</p>
      <p>{correctAnswer}</p>
    </Container>
  );
};


const Container = styled.div`
  position: relative;
  background-color: #fcfff6;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
        rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  &:hover {
    background-color: #b5b8b0;
  }
`;
