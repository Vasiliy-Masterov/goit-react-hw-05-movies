// При клике по элементу галереи должно открываться модальное окно
// с темным оверлеем и отображаться большая версия изображения.
// Модальное окно должно закрываться по нажатию клавиши ESC или
// по клику на оверлее.

// Внешний вид похож на функционал этого VanillaJS - плагина,
// только вместо белого модального окна рендерится изображение
// (в примере нажми Run).Анимацию делать не нужно!

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
  source: PropTypes.string,
  alt: PropTypes.string,
  closeModal: PropTypes.func,
};
