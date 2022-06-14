//import styles from './ContactItem';

export const ContactItem = ({ id, name, number }) => (
  <li key={id}>
    {name}: {number}
  </li>
);
