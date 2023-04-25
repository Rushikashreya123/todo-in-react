/* eslint-disable import/no-anonymous-default-export */
import React from "react";
export default function DisplayList({todoList,deleteTask}){
  return (
    <div id="display">
        <h2><u>Tasks List</u></h2>
        
      {todoList.map((item, index) => (
        <li key={index}>
          {item} 
          <button onClick={()=>deleteTask(index)}>Delete</button>
        </li>
      ))}
    
    </div>
    
  );
}