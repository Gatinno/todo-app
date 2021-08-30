import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPage, ActivePage, CompletedPage } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={AllPage} />
      <Route path="/active" component={ActivePage} />
      <Route path="/completed" component={CompletedPage} />
      <Route component={AllPage} />
    </Switch>
  );
}

export default Routes;