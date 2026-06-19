import React from 'react';
import styles from './about.module.css';
import clsx from 'clsx';
import Container from '../../Container';

const About = () => {
  return (
    <section className={clsx(styles.about)}>
      <Container className={clsx(styles.aboutContent)}>
        <h1 className={clsx(styles.aboutContentTitle)}>О клубе</h1>
      </Container>
    </section>
  );
};

export default About;
