import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = todoId => {
    dispatch(deleteContact({ id: todoId }));
  };

  return (
    <li className={styles.item}>
      <p className={styles.contact}>
        {name}............
        {number}
      </p>
      <button
        className={styles.btn}
        type="submit"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;