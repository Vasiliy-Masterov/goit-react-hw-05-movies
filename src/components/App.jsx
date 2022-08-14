import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contactData => {
    const arrayNames = contacts.map(contact => contact.name);
    if (arrayNames.includes(contactData.name)) {
      return alert(`${contactData.name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, contactData]);
  };

  const handleFindContacts = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = event => {
    const contactList = contacts;
    const idList = contactList.map(item => item.id);
    const index = idList.indexOf(event.target.id);
    contactList.splice(index, 1);
    setContacts([...contactList]);
  };

  const arrayWhithFindedContacts = contacts.filter(contact => {
    const contactName = contact.name.toLowerCase().split(' ');
    const statusArray = contactName.map(item => item.startsWith(filter));
    return statusArray.includes(true);
  });

  return (
    <div className={styles.app_container}>
      <h2 className={styles.title_phonebook}>Phonebook</h2>
      <ContactForm addContact={handleAddContact} />
      <h2 className={styles.title_contacts}>Contacts</h2>
      <Filter findContacts={handleFindContacts} />
      <ContactList
        arrayContacts={arrayWhithFindedContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
