import React, { useState } from 'react'

export default function Todo() {
    const[tasks,setTasks]=useState([])
    const[task,setTask]=useState()

    function handletask(){
        setTasks([...tasks,task])
        setTask('')
    }

    function deletetask(indextask){
        setTasks(tasks.filter((task,index)=>index!==indextask))
    }

 return (
    <div> 
    <h1>Make Your To-Do List!</h1>  
      <input type='text' 
      value={task} 
      placeholder='Enter the task to do' 
      onChange={(e)=>setTask(e.target.value)}/><br/><br/>
      <button onClick={handletask}>add task</button>
      <div>
        <h1>Tasks</h1>
        <ul>
            {tasks.map((task,index)=>{
                return(
                 <>  
            <li key={index}>{task}</li>
            <button onClick={()=>deletetask(index)}>Delete</button>
                </>
            )}
        )}
        </ul>
      </div>
    </div>
  )
}