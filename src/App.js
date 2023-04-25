import './App.css';
import TaskComponent from './TaskComponent';
import { useState } from 'react';
import DisplayList from './DisplayList'

function App() {
  const [todoList, setTodoList] = useState([]);

 const sendData=(task) =>
 {
  setTodoList([...todoList, task]);
  console.log(todoList,"show me todo")
 }

 const deleteTask= (index) =>
 {
   const updateedlist = todoList.filter((task, CurrentIndex)=> (CurrentIndex!==index));
   setTodoList(updateedlist)
 }
   
  return (
    <div className="App" id="outerBorder">
    
    <TaskComponent sendData={sendData}/>
    <DisplayList todoList={todoList} deleteTask={deleteTask}/>

      
    </div>
  );
}

export default App;
