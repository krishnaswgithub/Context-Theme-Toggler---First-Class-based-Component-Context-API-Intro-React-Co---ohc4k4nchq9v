// import React from 'react';

// const ThemeContext = React.createContext()
// const ThemeProvider = (props) =>{

//     return (
//         <React.Fragment>

//         </React.Fragment>
//     )
// }

// export {ThemeProvider,ThemeContext}

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
