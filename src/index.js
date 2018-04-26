import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//BrowserRouter - an component/object that interacts with the history library and decides what to do based on the URL change (looks at entire URL); Route - a component/object that checks URL and identifies the component to be shown (can render inside of any other component); Switch - matches exact URL to exact route (routes are nested inside statement), React matches paths lazily, if you have "/" and "/posts" it will show both components as they both have a "/"
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//redux-promise - handles asynchronous elements of requests to SG Blog API (implemented as middleware)
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//<BrowserRouter> - paths (using then Route component) go inside; <Route path="" component={}/> - if a user goes to X route/URL, display X component; <Switch> - matches looks at URL and displays only that component, React is lazy at matching e.g if you search for "/posts" it will also display all components with "/", most specific routes go at the top; "/posts/:id" - the reason why this is not first is because ":id" is a wildcard, if this was first and we went to "/new" it would think it was a posts id rather than being the route for the new post form
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
