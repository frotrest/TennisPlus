import React from 'react';
import styles from './benefits.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import SportSpots from '@assets/sport-spots.webp';
import Halls from '@assets/halls.webp';
import HardHall from '@assets/hard-hall.webp';

const Benefits = () => {
  const benefits = [
    {
      benefitImg: SportSpots,
      benefitTitle: '5 летних грунтовых кортов',
    },
    {
      benefitImg: Halls,
      benefitTitle: 'Зал с покрытием “Искусственная трава”',
    },
    {
      benefitImg: HardHall,
      benefitTitle: 'Зал с покрытием“Хард”',
    },
  ];
  return (
    <section className={clsx(styles.benefits)}>
      <Container className={clsx(styles.benefitsContent)}>
        {benefits.map((item, index) => (
          <div key={index} className={clsx(styles.benefit)}>
            <img
              src={item.benefitImg}
              alt={`benefit-img-${index}`}
              loading="lazy"
              className={clsx(styles.benefitImg)}
            />
            <h3 className={clsx(styles.benefitTitle)}>{item.benefitTitle}</h3>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Benefits;
