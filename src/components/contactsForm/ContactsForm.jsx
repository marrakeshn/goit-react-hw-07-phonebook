import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addNewContact } from 'redux/operations';
import { Label, Input, Button, Form } from './ContactsForm.styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactExist = contacts.find(
      item =>
        item.name.toLowerCase() === name.toLowerCase() || item.number === number
    );
    isContactExist
      ? alert(`${name} is already in contacts`)
      : dispatch(addNewContact({ name, number }));
    onReset();
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Label htmlFor="" name="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </Label>

      <Label htmlFor="" name="number">
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </Label>

      <Button type="submit" onSubmit={handleSubmit}>
        Add contact
      </Button>
    </Form>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
