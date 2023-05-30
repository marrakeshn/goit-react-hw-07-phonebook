import { ContactsForm } from './contactsForm/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './contactsFilter/ContactsFilter';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
