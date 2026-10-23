
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Home = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div>
      <h1>{dark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</h1>

      <p>Welcome to my React Context API app!</p>

      <button onClick={() => setDark(!dark)}>
        {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Home;
