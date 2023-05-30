import { useDispatch, useSelector } from 'react-redux';
import { onChangeValue } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import styles from './ContactsFilter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  let value = useSelector(selectFilter);

  return (
    <>
      <label className={styles.label}>Find contacts by name </label>
      <input
        className={styles.input}
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => dispatch(onChangeValue(e.target.value))}
      />
    </>
  );
};
