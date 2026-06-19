import React from 'react';
import styles from './championShip.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import StadiumPhoto from '@assets/championship.webp';

const AboutClub = () => {
  const stats = [
    {
      number: '7',
      text: 'Летних грунтовых кортов',
    },
    {
      number: '4',
      text: 'Зимних корта с покрытием «искусственная трава»',
    },
    {
      number: '3',
      text: 'Зимних корта с покрытием «hard»',
    },
  ];

  return (
    <section className={clsx(styles.aboutClub)}>
      <Container className={clsx(styles.aboutClubContent)}>
        <h2 className={clsx(styles.aboutClubContentTitle)}>Описание клуба</h2>
        <div className={clsx(styles.aboutClubContentWrapper)}>
          <div className={clsx(styles.aboutClubContentPhotoCol)}>
            <img
              src={StadiumPhoto}
              alt="stadium"
              loading="lazy"
              className={clsx(styles.aboutClubContentPhoto)}
            />
          </div>
          <div className={clsx(styles.aboutClubContentCard)}>
            <h3 className={clsx(styles.aboutClubContentCardTitle)}>
              Петербургский теннисный клуб имени М.А. Пасечникова
            </h3>
            <p className={clsx(styles.aboutClubContentCardText)}>
              Мы создали пространство, где тренируются и взрослые, и дети — от
              первых уроков для начинающих до интенсивной подготовки к турнирам.
              Каждый ученик может найти подходящий формат занятий независимо от
              уровня и возраста.
            </p>
            <p className={clsx(styles.aboutClubContentCardText)}>
              На территории клуба работают летние грунтовые корты и крытые залы
              с разными покрытиями, поэтому тренировки идут круглый год
              независимо от погоды и сезона. Профессиональные тренеры
              сопровождают учеников на всех этапах подготовки.
            </p>
            <p className={clsx(styles.aboutClubContentCardText)}>
              Регулярные турниры и сборы команд помогают расти в игре, получать
              соревновательный опыт и находить единомышленников среди других
              воспитанников клуба.
            </p>
            <div className={clsx(styles.stats)}>
              {stats.map((item, index) => (
                <div className={clsx(styles.stat)} key={index}>
                  <span className={clsx(styles.statNumber)}>{item.number}</span>
                  <span className={clsx(styles.statText)}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutClub;
