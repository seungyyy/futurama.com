import type { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Questions } from '../types/questions';


const QuestionsPage: NextPage = () => {
    const title = 'questions';
    const { data, error } = useFuturamaData(title);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{title}</h1>
            {data.map((questionsData: Questions) => {
                const { question, correctAnswer } = questionsData;

                return (
                    <div key={`fututama-${title}-${questionsData.id}`}>
                        <h3>title {title}</h3>
                        <br></br>
                        <p>question {question}</p>
                        <br></br>
                        <p>correctAnswer {correctAnswer}</p>
                        <br></br>
                    </div>
                );
            })}
        </div>
    );
};




export default QuestionsPage;
