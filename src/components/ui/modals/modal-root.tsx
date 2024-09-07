import { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { hideDocumentScroll } from '@/utils/hide-document-scroll.ts';
import styles from './modal-root.module.scss';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export type ModalProps = PropsWithChildren<{
  showModal: boolean;
  onClose: () => void;
}>;

const ModalRoot: FC<ModalProps> = ({ children, showModal, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    if (showModal) {
      hideDocumentScroll(true);
    }
  }, [showModal]);

  if (modalRoot) {
    return createPortal(
      <AnimatePresence onExitComplete={() => hideDocumentScroll(false)}>
        {showModal && (
          <motion.div
            key="modal-root"
            className={styles.root}
            variants={backdrop}
            animate="visible"
            initial="hidden"
            exit="hidden"
            onClick={(e) => {
              onClose();
              e.stopPropagation();
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>,
      modalRoot
    );
  }

  return null;
};

export default ModalRoot;
