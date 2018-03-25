// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReposPage, OrgsPage } from './containers';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

const routes = props => {
  return (
    <Switch>
      <PropsRoute exact path="/" component={ReposPage} {...props} />
      <PropsRoute path="/orgs" component={OrgsPage} {...props} />
    </Switch>
  );
};

export default routes;
