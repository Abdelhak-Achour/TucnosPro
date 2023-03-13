import { Route, Routes } from 'react-router-dom';
import {Home} from "./pages/home";
import React from 'react';
import {About} from './pages/about';
import {Blog} from './pages/blog';
import {Formation} from './pages/formation';
import {Certification} from './pages/certification';
import {Contact} from './pages/contact';
import {Partners} from './pages/partners';
import { Footer } from './components/footer';
import { Temoin } from './pages/temoin';
import { NotFound } from './pages/notfound';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/a-propos' element = {<About />} />
        <Route path = '/blog' element = {<Blog />} />
        <Route path = '/formation' element = {<Formation />} />
        <Route path = '/certification' element = {<Certification />} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/nos-partenaires' element = {<Partners />} />
        <Route path = '/temoin' element = {<Temoin />} />
        <Route path = '*' element = {<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
