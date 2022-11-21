import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./component/Title";
import InputForm from "./component/InputForm";
import ListArea from "./component/ListArea";


function App() {
  return (
  <div className="App">
    <Title/>

    <InputForm/>
    
    <ListArea/>
  </div>
  ); 
}

export default App;
