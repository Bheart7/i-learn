import React, { useState } from 'react';
import Card from './components/Card';

import './App.css';

const App = () => {
  const [subject, setSubject] = useState([
    {
      id: 1,
      title: 'Science',
      description: 'Dive into the Realm of imagination.',
      color: 'rgb(0,0,165)',
      button: 'Discover',
    },
    {
      id: '2',
      title: 'Social',
      description: 'Social norms and values define a person.',
      color: 'rgb(179, 16, 179)',
      button: 'Insight',
    },
    {
      id: '3',
      title: 'Maths',
      description: 'The laws of nature are mathematical thoughts of God.',
      color: '#87ceeb',
      button: 'Access',
    },
  ]);
  return (
    <div className='app'>
      <div className='app__cards'>
        {subject.map(({ id, title, description, color, button }) => (
          <Card
            id={id}
            title={title}
            description={description}
            color={color}
            button={button}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
