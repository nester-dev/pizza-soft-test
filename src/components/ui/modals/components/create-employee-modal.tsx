import { FC } from 'react';
import ModalRoot, { ModalProps } from '@/components/ui/modals/modal-root.tsx';
import { EmployeeForm } from '@/components';
import styles from '../modal-root.module.scss';

const CreateEmployeeModal: FC<ModalProps> = ({ showModal, onClose }) => {
  return (
    <ModalRoot showModal={showModal} onClose={onClose}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        onClick={(e) => e.stopPropagation()}
        className={styles.employee}
      >
        <EmployeeForm type="create" />
      </div>
    </ModalRoot>
  );
};

export default CreateEmployeeModal;
