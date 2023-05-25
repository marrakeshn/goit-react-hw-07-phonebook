import shortid from 'shortid';
import styles from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleAddContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    let existedContactValue = '';

    contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        existedContactValue = el.name.toLowerCase();
      } else if (el.number === number) {
        existedContactValue = el.number;
      }
    });

    if (existedContactValue) {
      return alert(`${existedContactValue} is already in contacts`);
    }

    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    dispatch(addContact({ contact }));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <div className={styles.allContacts}>All contacts: {contacts.length}</div>
      <Filter />
      <ContactList />
    </div>
  );
}
