import React from "react";
import Header  from "./components/header";
import Item from "./components/Item";
import Button from "./components/button";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return  (
    <div className="Parent">
      <div className="List_container">
        <Header heading="Todo" />
        <Item text="Sleep"/>
        <Item text="Play"/>
        <Item text="Eat"/>
        <Item text="Code"/>
        <Item text="Practice"/>
        <Button/>
      </div>
      <div>
        <Counter/>
      </div>
    </div>
  )
};

export default App;