//import styles from './ContactList';
import { ContactItem } from './ContactItem';

export const ContactList = ({ arrayWhithFindedContacts }) => {
  return (
    <ul>
      {arrayWhithFindedContacts.map(item => (
        <ContactItem id={item.id} name={item.name} number={item.number} />
      ))}
    </ul>
  );
};
