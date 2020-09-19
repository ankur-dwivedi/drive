import React from 'react';
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"

function App(props) {
  return (
    <div>
     <Header key={"header"}/>
     <Main key={"home"}/>
    </div>
  );
}

export default App;
