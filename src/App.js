import React from "react";

// Routes
import { Route } from "react-router-dom";

// Components

// Pages
import Home from "./pages/Home";

// Styles
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
