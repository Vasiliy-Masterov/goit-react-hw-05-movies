import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    //console.log(event.target.value);
    const inputName = event.target.value;
    this.setState({ name: inputName });
    //console.log(this.state);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    //console.log(this.state);
    const contactItem = {
      id: nanoid(),
      name: this.state.name,
    };
    //console.log(contactItem);
    const arrayContacts = this.state.contacts;
    arrayContacts.push(contactItem);
    this.setState({ contacts: arrayContacts });
    //console.log(this.state);
    this.setState({ name: '' });
    console.log(this.state);
  };

  render() {
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
              onChange={this.handleInputChange}
            />
          </lable>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li>Rosie Simpson</li>
          <li> Hermione Kline</li>
          <li>Edem Klements</li>
          {this.state.contacts.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
