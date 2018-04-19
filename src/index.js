import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//BrowserRouter - an component/object that interacts with the history library and decides what to do based on the URL change (looks at entire URL), Route - a component/object that checks URL and identifies the component to be shown (can render inside of any other component)
import { BrowserRouter, Route} from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//<BrowserRouter> - paths (using then Route component) go inside; <Route path="" component={}/> - if a user goes to X route/URL, display X component;
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
