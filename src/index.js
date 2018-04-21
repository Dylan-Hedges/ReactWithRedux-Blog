import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//BrowserRouter - an component/object that interacts with the history library and decides what to do based on the URL change (looks at entire URL), Route - a component/object that checks URL and identifies the component to be shown (can render inside of any other component)
import { BrowserRouter, Route} from 'react-router-dom';
//redux-promise - handles asynchronous elements of requests to SG Blog API (implemented as middleware)
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//<BrowserRouter> - paths (using then Route component) go inside; <Route path="" component={}/> - if a user goes to X route/URL, display X component;
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
