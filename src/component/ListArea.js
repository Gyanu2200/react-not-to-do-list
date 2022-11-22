import React from "react";
import {BadList} from "./BadList";
import EntryList from "./EntryList";

export const ListArea = ({ taskList, switchTask }) => {
  const entryList = taskList.filter((item) => item.type === "entry");
  const badList = taskList.filter((item) => item.type === "bad");
  return (
    <div className="row m-4">
      <div className="col">
        <EntryList taskList={entryList} switchTask={switchTask} />
      </div>
      <div className="col">
        <BadList 
        badList={badList} 
        switchTask={switchTask}
        />
      </div>
    </div>
  );
};
