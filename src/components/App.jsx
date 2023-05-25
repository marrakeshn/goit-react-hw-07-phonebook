import styles from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.entities);

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <div className={styles.allContacts}>All contacts: {contacts.length}</div>
      <Filter />
      <ContactList />
    </div>
  );
}
