import React from 'react';
import styles from './loader.module.css';
import clsx from 'clsx';

const Loader = () => {
  return <h2 className={clsx(styles.pageLoader)}>Загрузка...</h2>;
};

export default Loader;
