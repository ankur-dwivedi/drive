import React from 'react';
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"

function App(props) {
  return (
    <div>
     <Header key={"header"}/>
     <Home key={"home"}/>
    </div>
  );
}

export default App;
