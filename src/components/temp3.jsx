import { Component } from 'react';
import { nanoid } from 'nanoid';

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
    //console.log(event.target.value);
    this.setState({ name: event.target.value });
    //console.log(this.state);
  };

  handleInputChangeNumber = event => {
    //console.log(event.target.value);
    this.setState({ number: event.target.value });
    //console.log(this.state);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    //console.log(this.state);
    const contactItem = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    //console.log(contactItem);
    const arrayContacts = this.state.contacts;
    arrayContacts.push(contactItem);
    this.setState({ contacts: arrayContacts });
    //console.log(this.state);
    this.setState({ name: '', number: '' });
    console.log(this.state);
  };

  handleFindContacts = event => {
    //console.log(event.target.value);
    this.setState({ filter: event.target.value });
    //const filter = event.target.value;
    //console.log(filter);
  };

  render() {
    const { contacts, filter } = this.state;

    const arrayWhithFindedContacts = contacts.filter(contact => {
      if (filter === '') {
        return false;
      } else {
        const contactName = contact.name.toLowerCase().split(' ');
        const statusArray = contactName.map(item => item.startsWith(filter));
        return statusArray.includes(true);
      }
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
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={this.handleOnSubmit}
        >
          <lable
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChangeName}
            />
          </lable>
          <lable
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChangeNumber}
            />
          </lable>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <lable
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
        >
          Find contacts by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.filter}
            onChange={this.handleFindContacts}
          />
        </lable>

        <h2>List contacts after filter</h2>
        <ul>
          {arrayWhithFindedContacts.map(item => (
            <li key={item.id}>
              {item.name}: {item.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
