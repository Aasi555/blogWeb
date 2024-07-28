import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  const topics = [
    { name: 'Discipline of Actions and Thoughts', path: '/disciplineThoughts' },
    { name: 'Topic 2', path: '/topic2' },
    { name: 'Topic 3', path: '/topic3' },
  ];

  return (
    <div className="app">
      <Sidebar topics={topics} />
      <div className="content">
        <Routes>
          {topics.map((topic) => (
            <Route key={topic.path} path={topic.path} element={<Content name={topic.name} />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
