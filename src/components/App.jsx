import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsFromStorage) {
      this.setState({ contacts: contactsFromStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = contactData => {
    const arrayNames = this.state.contacts.map(contact => contact.name);
    if (arrayNames.includes(contactData.name)) {
      return alert(`${contactData.name} is already in contacts`);
    }
    this.setState(prev => ({ contacts: [...prev.contacts, contactData] }));
  };

  handleFindContacts = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = event => {
    const contactList = this.state.contacts;
    const idList = contactList.map(item => item.id);
    const index = idList.indexOf(event.target.id);
    contactList.splice(index, 1);
    this.setState({ contacts: [...contactList] });
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
