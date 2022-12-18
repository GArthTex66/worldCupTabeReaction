import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Equipes from './Equipes';
import Tabela from './Select';
import Banner from './Banner';
import Playoffs from './Playoffs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Banner/>
    <Playoffs/>
    <Equipes/>
    <Tabela/>
  </>
);
