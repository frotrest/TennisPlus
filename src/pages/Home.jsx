import React from 'react';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Description from '../components/Description/Description';
import Coaches from '../components/Staff/Staff';
import Favours from '../components/Favours/Favours';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Description />
      <Coaches />
      <Favours />
    </>
  );
};
