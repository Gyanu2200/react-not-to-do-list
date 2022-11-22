import { react, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./component/Title";
import InputForm from "./component/InputForm";
import {ListArea} from "./component/ListArea";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (data) => {
    setTaskList([...taskList, data]);
  };

  const switchTask = (_id, type) => {
    const temArg = taskList.map((item, i) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(temArg);
  };


  return (
    <div className="App">
      <Title />

      <InputForm addTask={addTask} />

      <ListArea taskList={taskList} switchTask={switchTask} />
    </div>
  );
}

export default App;
