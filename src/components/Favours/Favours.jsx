import React from 'react';
import styles from './favours.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { LuExternalLink } from 'react-icons/lu';

const Favours = () => {
  const favours = [
    'Зимний сезон 2021-2022',
    'Абонементы',
    'Скидки',
    'Дополнительные услуги',
  ];
  return (
    <section className={clsx(styles.favours)}>
      <Container className={clsx(styles.favoursContent)}>
        <h2 className={clsx(styles.favoursContentTitle)}>Цены и абонементы</h2>
        <div className={clsx(styles.favoursLinks)}>
          {favours.map((item, index) => (
            <a href="#" key={index} className={clsx(styles.favourLink)}>
              {item} <LuExternalLink color="white" size={25} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Favours;
