import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contactData => {
    const arrayContacts = this.state.contacts;
    const arrayNames = arrayContacts.map(contact => contact.name);
    if (arrayNames.includes(contactData.name)) {
      return alert(`${contactData.name} is already in contacts`);
    }
    arrayContacts.push(contactData);
    this.setState({ contacts: arrayContacts });
  };

  handleFindContacts = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = event => {
    const value = event.target.name;
    const contactList = this.state.contacts;
    const nameList = contactList.map(item => item.name);
    const index = nameList.indexOf(value);
    contactList.splice(index, 1);
    this.setState({ contacts: contactList });
  };

  render() {
    const { contacts, filter } = this.state;
    const arrayWhithFindedContacts = contacts.filter(contact => {
      const contactName = contact.name.toLowerCase().split(' ');
      const statusArray = contactName.map(item => item.startsWith(filter));
      return statusArray.includes(true);
    });

    return (
      <div className={styles.app_container}>
        <h2 className={styles.title_phonebook}>Phonebook</h2>
        <ContactForm addContact={this.handleAddContact} />
        <h2 className={styles.title_contacts}>Contacts</h2>
        <Filter filter={filter} findContacts={this.handleFindContacts} />
        <ContactList
          arrayContacts={arrayWhithFindedContacts}
          deleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
