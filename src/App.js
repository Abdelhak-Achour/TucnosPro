import { Route, Routes } from 'react-router-dom';
import {Home} from "./pages/home";
import React from 'react';
import {About} from './pages/about';
import {Blog} from './pages/blog';
import { Formations} from './pages/formations';
import {Contact} from './pages/contact';
import {Partners} from './pages/partners';
import { Footer } from './components/footer';
import { Temoin } from './pages/temoin';
import { NotFound } from './pages/notfound';
import { Formation } from './pages/formation';
import { Inscrire } from './pages/inscrire';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Admin } from './pages/admin';
import { Testpage } from './pages/testpage';
import { Post } from './pages/post';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/a-propos' element = {<About />} />
        <Route path = '/blog' element = {<Blog />}>
          <Route index element = {<Blog />} />
          <Route path = ':id' element = {<Blog />} />
          <Route path = 'post/:id' element = {<Post />} />
        </Route>
        <Route path = '/formations'>
          <Route index element = {<Formations />} />
          <Route path = ':id' element = {<Formation />} />
          <Route path = ':id/inscrire' element = {<Inscrire />} />
        </Route>
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/nos-partenaires' element = {<Partners />} />
        <Route path = '/temoin' element = {<Temoin />} />
        <Route path = '/not-found' element = {<NotFound />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/admin' element = {<Admin />} />
        <Route path = '/testpage' element = {<Testpage />} />
        <Route path = '*' element = {<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
