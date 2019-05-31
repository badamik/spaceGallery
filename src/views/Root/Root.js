import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Earth from 'views/Earth/Earth';
import Moon from 'views/Moon/Moon';
import Mars from 'views/Mars/Mars';
import About from 'views/About/About';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Earth} />
        <Route path="/moon" component={Moon} />
        <Route path="/mars" component={Mars} />
        <Route path="/about" component={About} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
