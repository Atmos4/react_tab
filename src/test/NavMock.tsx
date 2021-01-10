import React from "react";
import Nav from "../components/Nav/Nav";
import Tab from "../components/Tab/Tab";

function App() {
    return (
      <div>
        <Nav>
          <Tab title="Immersive">Captivating</Tab>
          <Tab title="Compare">Associate</Tab>
          <Tab title="Simple">Easy</Tab>
        </Nav>
      </div>
    );
  }
  
  export default App;