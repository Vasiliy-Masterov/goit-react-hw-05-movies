import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { ContactItem } from './ContactItem';

export const ContactList = ({ arrayContacts, deleteContact }) => {
  return (
    <ul className={styles.contact_list}>
      {arrayContacts.map(item => (
        <ContactItem
          id={item.id}
          name={item.name}
          number={item.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  arrayContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func,
  ContactItem: PropTypes.node,
};
