import { lazy } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layouts/Layout';
import { HomePage } from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
