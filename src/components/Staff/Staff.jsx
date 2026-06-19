import React, { useRef } from 'react';
import styles from './staff.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Coaches = () => {
  const coaches = [
    {
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Анна Кравцова',
      text: 'Работает со взрослыми группами, готовит к любительским турнирам.',
    },
    {
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Игорь Власов',
      text: 'Ведёт группы для детей от 5 лет, делает акцент на технике.',
    },
    {
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: 'Дмитрий Орлов',
      text: 'Подготовка к турнирам, индивидуальная физическая программа.',
    },
    {
      photo: 'https://randomuser.me/api/portraits/men/12.jpg',
      name: 'Максим Беляев',
      text: 'Отвечает за выносливость и общую физическую базу игроков.',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/21.jpg',
      name: 'Софья Лебедева',
      text: 'Специализируется на группах начального уровня 6–10 лет.',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/50.jpg',
      name: 'Елена Соколова',
      text: 'Организует расписание и ведёт групповые занятия для взрослых.',
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={clsx(styles.coaches)}>
      <Container className={clsx(styles.coachesContent)}>
        <div className={clsx(styles.coachesHeader)}>
          <h2 className={clsx(styles.coachesTitle)}>Тренерский состав</h2>
          <div className={clsx(styles.coachesControls)}>
            <button
              type="button"
              ref={prevRef}
              className={clsx(styles.coachesArrow)}
              aria-label="Предыдущие тренеры"
            >
              <LuArrowLeft size={20} />
            </button>
            <button
              type="button"
              ref={nextRef}
              className={clsx(styles.coachesArrow)}
              aria-label="Следующие тренеры"
            >
              <LuArrowRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {coaches.map((coach, index) => (
            <SwiperSlide key={index}>
              <div className={clsx(styles.coachCard)}>
                <img
                  src={coach.photo}
                  alt={coach.name}
                  loading="lazy"
                  className={clsx(styles.coachPhoto)}
                />
                <h3 className={clsx(styles.coachName)}>{coach.name}</h3>
                <p className={clsx(styles.coachText)}>{coach.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Coaches;
