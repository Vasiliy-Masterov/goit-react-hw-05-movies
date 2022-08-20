import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ loadNextPage }) => {
  return (
    <button
      className={styles.Button}
      name="pageLoad"
      type="button"
      onClick={loadNextPage}
    >
      Load
    </button>
  );
};

Button.propTypes = {
  loadNextPage: PropTypes.func,
};
