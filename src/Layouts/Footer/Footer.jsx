import clsx from 'clsx';
import React from 'react';
import styles from './footer.module.css';
import Container from '../../Container';
import { NavLink } from 'react-router';
import { FaYoutube, FaVk } from 'react-icons/fa';

const Footer = () => {
  const navLinks = ['Услуги', 'Детский теннис', 'Галерея', 'Цены', 'Контакты'];
  return (
    <footer className={clsx(styles.footer)}>
      <Container className={clsx(styles.footerContent)}>
        <h5 className={clsx(styles.footerContentWatermark)}>
          2022 © Все права защищены.
        </h5>
        <nav className={clsx(styles.navBar)}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(
                styles.FooterNavBarLink,
                isActive && styles.FooterNavBarLinkActive
              )
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx(
                styles.FooterNavBarLink,
                isActive && styles.FooterNavBarLinkActive
              )
            }
          >
            О клубе
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              clsx(
                styles.FooterNavBarLink,
                isActive && styles.FooterNavBarLinkActive
              )
            }
          >
            Турниры
          </NavLink>
          {navLinks.map((item, index) => (
            <a href="#" key={index} className={clsx(styles.FooterNavBarLink)}>
              {item}
            </a>
          ))}
        </nav>
        <div className={clsx(styles.networks)}>
          <FaYoutube className={clsx(styles.networkFooter)} size={30} />
          <FaVk className={clsx(styles.networkFooter)} size={30} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
