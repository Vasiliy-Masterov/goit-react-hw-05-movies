import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleInputChangeNumber = event => {
    this.setState({ number: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const contactItem = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    const arrayContacts = this.state.contacts;
    arrayContacts.push(contactItem);
    this.setState({ contacts: arrayContacts });
    this.setState({ name: '', number: '' });
  };

  handleFindContacts = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const arrayWhithFindedContacts = contacts.filter(contact => {
      const contactName = contact.name.toLowerCase().split(' ');
      const statusArray = contactName.map(item => item.startsWith(filter));
      return statusArray.includes(true);
    });

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm
          handleOnSubmit={this.handleOnSubmit}
          handleInputChangeName={this.handleInputChangeName}
          handleInputChangeNumber={this.handleInputChangeNumber}
          nameValue={this.state.name}
          numberValue={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFindContacts={this.handleFindContacts} />
        <ContactList arrayWhithFindedContacts={arrayWhithFindedContacts} />
      </div>
    );
  }
}
