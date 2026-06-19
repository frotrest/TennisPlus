import React from 'react';
import styles from './description.module.css';
import Coach from '@assets/description.webp';
import clsx from 'clsx';
import Container from '../../Container';

const Description = () => {
  const features = [
    {
      featureText:
        'Профессиональные тренеры с действующей квалификацией ITF и многолетним опытом подготовки спортсменов разного уровня.',
    },
    {
      featureText:
        'Грунтовые и хардовые корты, а также крытый зал — занятия проходят круглый год независимо от погоды.',
    },
    {
      featureText:
        'Группы для детей и взрослых: от первого знакомства с ракеткой до подготовки к турнирам.',
    },
    {
      featureText:
        'Регулярные соревнования и сборы команд, которые помогают расти в игре и находить единомышленников.',
    },
  ];
  return (
    <section className={clsx(styles.description)}>
      <Container className={clsx(styles.descriptionContent)}>
        <img
          src={Coach}
          alt="coach"
          loading="lazy"
          className={clsx(styles.descriptionContentImg)}
        />
        <div className={clsx(styles.descriptionBlock)}>
          <h2 className={clsx(styles.descriptionBlockTitle)}>
            Спортивный клуб
          </h2>
          <p className={clsx(styles.descriptionBlockItem)}>
            Петербургский теннисный клуб имени М.А. Пасечникова — это место, где
            тренируются и взрослые, и дети. Мы создали пространство, в котором
            каждый может найти подходящий формат: от первых уроков для
            начинающих до интенсивной подготовки для тех, кто выходит на
            турниры.
          </p>
          <h3 className={clsx(styles.aboutSubtitle)}>
            Почему выбирают наш клуб.
          </h3>

          <ul className={clsx(styles.featureList)}>
            {features.map((item, index) => (
              <li className={clsx(styles.featureItem)} key={index}>
                <span className={clsx(styles.featureMarker)} />
                <span className={clsx(styles.featureText)}>
                  {item.featureText}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Description;
