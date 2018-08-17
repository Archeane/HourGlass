import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Signup, Profile, EditProfile } from './containers';

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from './commons/authWrapper';

import { NotFound, Landing } from './components';

export default () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" exact component={userIsNotAuthenticatedRedir(Login)} />
    <Route
      path="/signup"
      exact
      component={userIsNotAuthenticatedRedir(Signup)}
    />
    <Route path="/home" exact component={userIsAuthenticatedRedir(Home)} />
    <Route
      path="/profile"
      exact
      component={userIsAuthenticatedRedir(Profile)}
    />
    <Route
      path="/profile/edit"
      exact
      component={userIsAuthenticatedRedir(EditProfile)}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
