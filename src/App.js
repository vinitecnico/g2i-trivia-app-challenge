import React from "react";
import Routes from "./routes";
import { Header } from './components'
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
