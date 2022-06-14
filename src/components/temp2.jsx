import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    //console.log(event.target.value);
    const inputName = event.target.value;
    this.setState({ name: inputName });
    //console.log(this.state);
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
        <ul>
          <li>Rosie Simpson: 459-12-56</li>
          <li> Hermione Kline: 443-89-12</li>
          <li>Edem Klements: 645-17-79</li>
          {this.state.contacts.map(item => {
            return (
              <li key={item.id}>
                {item.name}: {item.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
