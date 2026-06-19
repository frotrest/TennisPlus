import React from 'react';
import styles from './hero.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { LuExternalLink } from 'react-icons/lu';

const Hero = () => {
  const favours = [
    {
      favourTitle: 'Услуги',
      favourLink: 'Аренда',
    },
    {
      favourTitle: 'Услуги',
      favourLink: 'Детский теннис',
    },
    {
      favourTitle: 'Услуги',
      favourLink: 'Сборы команд',
    },
    {
      favourTitle: 'Турниры',
      favourLink: 'Рассписание',
    },
  ];
  return (
    <section className={clsx(styles.hero)}>
      <Container className={clsx(styles.heroContent)}>
        <h1 className={clsx(styles.heroContentTitle)}>
          Петербургский <br /> теннисный клуб имени М.А. Пасечникова
        </h1>
        <div className={clsx(styles.tips)}>
          {favours.map((item, index) => (
            <div className={clsx(styles.tip)} key={index}>
              <h5 className={clsx(styles.tipTitle)}>{item.favourTitle}</h5>
              <a href="#" className={clsx(styles.tipLink)}>
                {item.favourLink} <LuExternalLink color="white" size={25} />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
