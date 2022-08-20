import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ source, alt, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>
        <img className={styles.Modal_image} src={source} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
