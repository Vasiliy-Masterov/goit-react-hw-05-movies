//import { Component } from 'react';
//import { nanoid } from 'nanoid';
//import styles from './ContactForm.module.css';

export const ContactForm = ({
  handleOnSubmit,
  handleInputChangeName,
  handleInputChangeNumber,
  nameValue,
  numberValue,
}) => {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={handleOnSubmit}
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
          value={nameValue}
          onChange={handleInputChangeName}
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
          value={numberValue}
          onChange={handleInputChangeNumber}
        />
      </lable>
      <button type="submit">Add contact</button>
    </form>
  );
};
