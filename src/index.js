import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";

// Redux store
import { createStore, applyMiddleware, compose } from "redux";

// Redux reducers
import rootReducer from "./reducers/index";

// Thunk for async calls of redux
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
