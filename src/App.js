import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Containers/HomePage';
import MovieInfo from './Components/MovieInfo';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#DB202C' },
  },
});
const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <div className='header'>
          <img
            src='https://fontmeme.com/permalink/201013/9a560530b9f8b713cd79e58e3c4c73e9.png'
            alt='netflix-font'
            border='0'
          />
        </div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/details' component={MovieInfo} />
        </Switch>
      </MuiThemeProvider>
    </>
  );
};

export default App;
