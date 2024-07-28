import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ topics }) => {
  return (
    <div className="sidebar">
      <ul>
        {topics.map((topic) => (
          <li key={topic.path}>
            <Link to={topic.path}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
