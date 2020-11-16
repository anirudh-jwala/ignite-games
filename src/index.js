import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Redux
import { Provider } from "react-redux";

// Redux store
import { createStore } from "redux";

// Redux reducers
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
