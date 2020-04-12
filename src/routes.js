import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CV from './pages/CV'
import WallExample from './pages/WallExample'

export default function Routes(){
  return(
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={CV} />
              <Route path="/wallExample" exact component={WallExample} />
          </Switch>
      </BrowserRouter> 
  );
}