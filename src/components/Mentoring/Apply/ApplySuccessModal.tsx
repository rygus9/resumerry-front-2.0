import Modal from '@/components/shared/common/Modal';
import usePathPush from '@/hooks/useReplace';

interface ApplySuccessModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ApplySuccessModal({ closeModal, isOpen }: ApplySuccessModalProps) {
  const onGoHome = usePathPush('/mypage/mentoring');

  return (
    <Modal isOpen={isOpen} closeModal={onGoHome}>
      <div className="pt-2 pb-4">
        <h3 className="pt-2 pb-6 text-xl text-darkGray">멘토링 신청에 성공하셨습니다.</h3>
        <button onClick={onGoHome} className="rounded-lg bg-lightPurple px-4 py-1 text-base text-darkWhite">
          확인
        </button>
      </div>
    </Modal>
  );
}
