// import React from 'react';


// const ThemeToggleButton = () =>{
    
//     return (
//        <></>
//     )

// }
// export {ThemeToggleButton}

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`btn-${theme} txt-${theme} btn`}
      id="global-theme-toggler"
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </button>
  );
};

export { ThemeToggleButton };
