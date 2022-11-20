import React from "react";
import "./App.css";
import EntryList from "./component/EntryList";
import InputForm from "./component/InputForm";

function App() {
  return (
  <div className="App">
    {/* Title */}
    <h2 className="title mt-5">Not To Do List</h2>

    {/* Form section */}
    <InputForm/>

    {/* Entry List */}
    <EntryList/>
  </div>
  ); 
}

export default App;
