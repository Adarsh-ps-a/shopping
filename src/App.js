import React from "react";
import "./App.css";
import Router from "./navigation/router";
import configureStore from "./reducer/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={configureStore()}>
      <div className='App'>
        <Router />
      </div>
    </Provider>
  );
}
//todo styles

export default App;
