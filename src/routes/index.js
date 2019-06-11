import React from 'react';
import Home from '../components/Home';
import Users from '../components/Users';
import CounterComp from '../components/CounterComp';
import NotFound from '../components/NotFound';

export default [
  {
    path: '/', component: Home,
  },
  {
    path: '/users', component: Users
  },
  {
    path: '/counter', component: CounterComp
  },
  {
    component: NotFound
  }
]