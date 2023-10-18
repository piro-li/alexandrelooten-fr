import React from 'react';
import ReactDOM from 'react-dom/client';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import './index.scss';
import Window from './components/Window';
import Header from './sections/Header';
import Background from './components/Background';
import Experiences from './sections/Experiences';
import Phrases from './sections/Phrases';
import Skills from './sections/Skills';
import Diplomas from './sections/Diplomas';
import Studies from './sections/Studies';

dayjs.locale('fr');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Window id="main" head={{ title: 'Site Internet', level: 1, color: 'secondary' }}>
      <Background />
      <Header />
      <Phrases />
      <Skills />
      <Experiences />
      <Diplomas />
      <Studies />
      <div style={{ textAlign: 'center', gridArea: '7 / 1 / 8 / 3' }}>
        Alexandre Looten
        {' '}
        &copy;
        {' '}
        {dayjs().year().toString()}
      </div>
    </Window>
  </React.StrictMode>,
);
