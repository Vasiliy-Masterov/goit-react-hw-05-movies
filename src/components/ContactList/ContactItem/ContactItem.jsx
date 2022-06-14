//import styles from './ContactItem';

export const ContactItem = ({ id, name, number, handleDeleteContact }) => (
  <li key={id}>
    <span>
      {name}: {number}
    </span>
    <button name={name} type="button" onClick={handleDeleteContact}>
      Delete
    </button>
  </li>
);
