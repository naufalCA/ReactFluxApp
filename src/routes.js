"use strict";
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var routes = (
    <Route name='app' path='/' handler={require('./Components/app')}>
      <DefaultRoute handler={require('./Components/homePage')}/>
      <Route name='authors' handler={require('./Components/authors/AuthorsPage')}/>
      <Route name='about' handler={require('./Components/about/AboutPage')}/>
      <NotFoundRoute handler={require('./Components/NotFoundPage')}/>
      <Redirect from='about-us' to='about'/>
      <Redirect from='about/*' to='about'/>
    </Route>
);

module.exports = routes;
