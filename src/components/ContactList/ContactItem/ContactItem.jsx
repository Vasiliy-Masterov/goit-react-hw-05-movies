import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={styles.item_data}>
        {name}: {number}
      </span>
      <button
        className={styles.item_button}
        name={name}
        type="button"
        onClick={deleteContact}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteContact: PropTypes.func,
};
