import React from 'react';
import styles from './header.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import Logo from '@assets/logo.webp';
import { NavLink, Outlet } from 'react-router';
import { FaYoutube, FaVk } from 'react-icons/fa';

const Header = () => {
  const navLinks = ['Услуги', 'Детский теннис', 'Галерея', 'Цены', 'Контакты'];
  return (
    <header className={clsx(styles.header)}>
      <Container className={clsx(styles.headerContent)}>
        <img src={Logo} alt="logo" className={clsx(styles.headerContentLogo)} />
        <nav className={clsx(styles.navBar)}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles.navBarLink, isActive && styles.navBarLinkActive)
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx(styles.navBarLink, isActive && styles.navBarLinkActive)
            }
          >
            О клубе
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              clsx(styles.navBarLink, isActive && styles.navBarLinkActive)
            }
          >
            Турниры
          </NavLink>
          {navLinks.map((item, index) => (
            <a href="#" key={index} className={clsx(styles.navBarLink)}>
              {item}
            </a>
          ))}
        </nav>
        <div className={clsx(styles.networks)}>
          <FaYoutube className={clsx(styles.network)} size={30} />
          <FaVk className={clsx(styles.network)} size={30} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
