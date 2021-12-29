import type { NextPage } from 'next';
import { QuestionContainer } from '../components';


const QuestionsPage: NextPage = () => {
  const name = 'questions';

  return (
    <QuestionContainer text={name}/>
  );
};

export default QuestionsPage;
