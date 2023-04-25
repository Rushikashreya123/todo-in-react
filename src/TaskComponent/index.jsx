import React, { useState } from "react";
// import DisplayList from './DisplayList';
export default function TaskComponent(props){
    const[Text,setText]=useState('');
    function handleclick(){
        props.sendData(Text);
        setText(" ");
        
    }
    
    return(
        <div id="input">
        
            <h1>ToDo Application</h1>
            <input type="text" placeholder="enter your task...." value={Text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit" onClick={handleclick} >Add</button>
            
            
        </div>
    
    

 );

}
