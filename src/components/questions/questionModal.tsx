import styled from '@emotion/styled';
import { theme } from '../../constants/theme';
import deleteButton from '../../../public/image/delete-btn.png';
import Image from 'next/image';

interface QuestionModalProps {
  text: string | number;
  content: string;
  isModal: (text: boolean)=> void;
}

export const QuestionModal = ({ text, isModal, content }: QuestionModalProps) => {
  const modalOff = () => {
    isModal(false);
  };

  return (
    <ModalContainer>
      <ModalCont>
        <div className="modal-header">
          <span className="modal-tit">{content === '결과확인' ? '결과확인' : '정답선택'}</span>
          <button onClick={modalOff}>
            <Image src={deleteButton} alt="닫기버튼" />
          </button>
        </div>
        <p>{text}</p>
        <span className="modal-btn" onClick={modalOff}>
          확인
        </span>
      </ModalCont>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

const ModalCont = styled.div`
  position: absolute;
  width: 250px;
  height: 180px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: ${theme.colors.white};
  border-radius: 11px;
  border: 1px solid ${theme.colors.grey};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .modal-header {
    position: relative;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid ${theme.colors.lightGrey};
    .modal-tit {
      text-align: center;
      font-size: 0.8rem;
    }
    button {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 25px;
    }
  }
  p {
    transform: translateY(80%);
  }
  .modal-btn {
    display: inline-block;
    ${theme.common.buttonStyle}
    font-size: .75rem;
    transform: translateY(110%);
  }
`;