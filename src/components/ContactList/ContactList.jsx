import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import Notification from 'components/Notification/Notification';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (contacts.length) {
    return (
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    );
  }

  return (
    <Notification message="There are no saved contacts in the phonebook, please add.." />
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
