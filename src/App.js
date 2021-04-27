import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  
  return (
  
      <div>
         <Header /> 
        <Wrapper>
          <Main />
        </Wrapper>
        
      </div>
  
  );
}

export default App;
