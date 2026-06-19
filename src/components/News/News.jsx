import React from 'react';
import styles from './news.module.css';
import clsx from 'clsx';
import Container from '../../Container';

const News = () => {
  return (
    <section className={clsx(styles.news)}>
      <Container className={clsx(styles.newsContent)}>
        <h1 className={clsx(styles.newsContentTitle)}>Новости</h1>
      </Container>
    </section>
  );
};

export default News;
