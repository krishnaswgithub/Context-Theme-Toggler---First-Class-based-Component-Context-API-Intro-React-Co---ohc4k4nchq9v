// import React from 'react';


// const LocalThemedBox = () => {

// return(
//     <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
//         {/* Write code below this line */}
        
//     </div>
// )
// }

// export { LocalThemedBox }

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{ width: '200px', height: '200px', border: '2px solid green' }}
      id="local-themed-box"
      className={`bg-${theme}`}
    >
      {/* Write code below this line */}
      <p id="local-themed-text-container" className={`txt-${theme}`}>
        Some Text
      </p>
      <button
        id="local-theme-toggler"
        className={`btn-${theme} btn`}
        onClick={() => {
          // Toggle the local theme
        }}
      >
        {theme === 'light'
          ? 'Toggle local theme to dark'
          : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
