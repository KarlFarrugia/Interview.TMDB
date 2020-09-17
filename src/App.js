import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import {App, Section} from './assets/StyledComponents/App';

export default function () {
  return (
    <App>
      <Section>
        <Card />
      </Section>
    </App>
  );
}