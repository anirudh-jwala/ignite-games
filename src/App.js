import React from "react";

// Components

// Pages
import Home from "./pages/Home";

// Styles
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;
