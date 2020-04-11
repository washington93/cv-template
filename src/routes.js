import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CV from './pages/CV'

export default function Routes(){
  return(
      <BrowserRouter>
          <Switch>
              <Route path="/cv" exact component={CV} />
          </Switch>
      </BrowserRouter> 
  );
}