import React from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  
  return (
  
      <div>
        {/* <Navbar /> */}
        <Wrapper>
          <Main />
        </Wrapper>
        
      </div>
  
  );
}

export default App;
