//import styles from './Filter.module.css';

export const Filter = ({ filter, handleFindContacts }) => {
  return (
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
        value={filter}
        onChange={handleFindContacts}
      />
    </lable>
  );
};
