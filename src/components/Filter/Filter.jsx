import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value.trim()));
  };

  return (
    <div className={styles.filter}>
      <label className={styles.labelFilter}>
        Filter
        <input
          type="name"
          value={filterValue}
          onChange={handleChange}
          className={styles.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;
