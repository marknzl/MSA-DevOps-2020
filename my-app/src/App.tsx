import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import StudentGrid from './components/StudentGridComponent/StudentGrid';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <StudentGrid />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
