import React from 'react';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value.trim()));
  };

  return (
    <div className={styles.filter}>
      <label className={styles.labelFilter}>
        Filter
        <input
          type="name"
          onChange={handleChange}
          className={styles.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;
