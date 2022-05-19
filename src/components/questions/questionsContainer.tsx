import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { QuestionCard } from './questionsCard';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Questions } from '../../types/questions';
import { useState, useEffect } from 'react';
import { theme } from '../../constants/theme';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useRouter } from 'next/router';
import { QuestionModal } from './questionModal';
import { redirect } from 'next/dist/server/api-utils';
interface QuestionContainerProps { 
  text: string;
}
interface QuestionNumber { 
  start: number;
  end: number;
}

export const QuestionContainer = ({ text }: QuestionContainerProps) => {
  const { data, error } = useFuturamaData(text);
  const router = useRouter();
  const [isReturn, setIsReturn] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [correctResult, setCorrectResult] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionNumber>({
    start: 0,
    end: 1,
  });

  const result: Array<string> = [];
  if (data) {
    (function (obj: object) {
      for (const [index, value] of Object.entries(obj)) {
        let val = value.correctAnswer;
        if (value) {
          result.push(val.toString());
        }
      }
    })(data);
  }

  const handleClickBtn = (num: number) => {
    if (num === 1) {
      setQuestion({
        start: question.start + 1,
        end: question.end + 1,
      });
    } else  {
      setQuestion({
        start: question.start - 1,
        end: question.end - 1,
      });
    }
  };

  const handlerRefreshPage = () => {
    setIsReturn(false);
    localStorage.clear();
    router.reload();
  };

  if (error) return <Error />;
  if (!data) return <Loading />;

  const handleClick:any = (event: React.MouseEvent<HTMLElement>) => {
    let word: string | null = null;
    let check: boolean = false;
    const tag = document.querySelectorAll('input');
    [].forEach.call(tag, function (tag: any) {
      if (tag.checked) {
        check = true;
      }
    });

    if ((event.target as HTMLElement).tagName === 'LABEL') {
      word = (event.target as HTMLElement).textContent;
      if (word !== null) {
        let answer = word.slice(3);
        localStorage.setItem(`${question.start}`, answer);
        return;
      }
    } 
    if ((event.target as HTMLElement).className === 'prev-btn') {
      handleClickBtn(0)
    }
    if ((event.target as HTMLElement).className === 'next-btn') {
      if (check) handleClickBtn(1);
      else setIsAnswer(true);
    }

    if ((event.target as HTMLElement).className === 'result-btn') { 
      setCorrectResult(
        result.filter((val: string, index: number) => val === localStorage.getItem(`${index}`)).length
      );
  
    }
  }

  return (
    <Section1>
      {isModal && (
        <QuestionModal
          content={'결과확인'}
          text={correctResult + '개 맞췄습니다.'}
          isModal={setIsModal}
        />
      )}
      {isAnswer && (
        <QuestionModal content={'정답선택'} text={'정답을 선택해주세요.'} isModal={setIsAnswer} />
      )}
      <Category>Quiz</Category>
      <Article onClick={handleClick}>
        {data.slice(question.start, question.end).map((questionData: Questions) => {
          return (
            <QuestionCard
              key={`${text}-list-${questionData.id}`}
              questionData={questionData}
              number={question.start}
            />
          );
        })}
        {question.end !== 1 && <button className="prev-btn">이전</button>}
        {question.end !== 27 && <button className="next-btn">다음</button>}
        {question.end === 27 && (
          <button
            className="result-btn"
            onClick={() => {
              setIsModal(true);
              setIsReturn(true);
            }}
          >
            결과 확인
          </button>
        )}
        {isReturn && (
          <button className="return-btn" onClick={handlerRefreshPage}>
            다시하기
          </button>
        )}
      </Article>
    </Section1>
  );
};

const Section1 = styled.section`
  ${theme.common.section}
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    margin-top: 9rem;
  }
`;

const Category = styled.p`
  ${theme.common.category};
`;

const Article = styled.section`
  position: relative;
  ${theme.common.containerShadow}
  .next-btn,
  .result-btn,
  .prev-btn,
  .return-btn {
    position: absolute;
    bottom: 1.5rem;
    ${theme.common.buttonStyle}
  }
  .prev-btn {
    left: 43%;
    transform: translateX(-50%);
  }
`;
