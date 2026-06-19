import React from 'react';
import styles from './blog.module.css';
import clsx from 'clsx';
import Container from '../../Container';

const Blog = () => {
  const newsList = [
    {
      photo:
        'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop',
      date: '12 июня 2026 года',
      text: 'Открылась запись в летние группы для детей от 6 лет на новый сезон.',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop',
      date: '28 мая 2026 года',
      text: 'Грунтовые корты подготовлены к сезону — расписание аренды уже доступно.',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=600&h=400&fit=crop',
      date: '15 мая 2026 года',
      text: 'Воспитанник клуба вышел в финал юниорского турнира области.',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=600&h=400&fit=crop',
      date: '30 апреля 2026 года',
      text: 'Стартовали сборы взрослой команды перед городскими соревнованиями.',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=600&h=400&fit=crop',
      date: '18 апреля 2026 года',
      text: 'Обновили инвентарь для занятий: новые мячи и стойки для тренировок.',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop',
      date: '2 апреля 2026 года',
      text: 'Провели открытую тренировку для родителей с детской группой.',
    },
  ];

  return (
    <section className={clsx(styles.blog)}>
      <Container className={clsx(styles.blogContent)}>
        <div className={clsx(styles.blogGrid)}>
          {newsList.map((item, index) => (
            <article className={clsx(styles.blogCard)} key={index}>
              <img
                src={item.photo}
                alt={`news-${index}`}
                loading="lazy"
                className={clsx(styles.blogPhoto)}
              />
              <span className={clsx(styles.blogDate)}>{item.date}</span>
              <p className={clsx(styles.blogText)}>{item.text}</p>
              <button type="button" className={clsx(styles.blogButton)}>
                Подробнее
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
