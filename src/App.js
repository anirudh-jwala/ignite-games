import React from "react";

// Routes
import { Route } from "react-router-dom";

// Components
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";

// Styles
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
