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

  const toggleLocalTheme = () => {
    // Implement your local theme toggling logic here
  };

  return (
    <div className={`bg-${theme}`} id="local-themed-box">
      <p
        className={`txt-${theme}`}
        id="local-themed-text-container"
      >
        Local Themed Text
      </p>
      <button
        className={`btn-${theme} btn`}
        id="local-theme-toggler"
        onClick={toggleLocalTheme}
      >
        {theme === 'light'
          ? 'Toggle local theme to dark'
          : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
