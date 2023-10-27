import React from 'react'
import './todonote.css'
import { useState, useRef } from 'react'
const TodoApp = () => {

  const inputRef = useRef(null)
  const [addEditBtn, setaddEditBtn] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const EditDataRef = useRef(null);
  let Id = taskList.length;

  const handleAdd = () => {
    if (addEditBtn) {
      //Functionality for the Add Button
      if (inputRef.current.value.trim()) {
        setTaskList([
          ...taskList,
          {
            id: Id++,
            task: inputRef.current.value,
            statusCompletion: false,
          },
        ]);
      } else {
        window.alert("Please enter the task");
      }
    }
    else {
      //This is the functionality for edit button
      // console.log(EditDataRef.current.id);
      setTaskList(taskList.map((task) => {

        if (task.id === EditDataRef.current.id) {
          task.task = inputRef.current.value;
          console.log("changed");
          return task
        }
        else {
          console.log('not changed');
          return task
        }
      }))

      setaddEditBtn(true);
      inputRef.current.value = '';
    }
    inputRef.current.value = '';
  }

  const handleComplete = (taskObj) => {
    
    setTaskList(taskList.map((task)=>{
        if(taskObj.id===task.id){
          task.statusCompletion=true
          return task;
        }
        else{
          return task;
        }
    }))
    

  }

  const handleDelete = (taskPram) => {
    setTaskList(taskList.filter((task) => task.id !== taskPram.id)
    )
  }
  const handleEdit = (taskParam) => {
    EditDataRef.current = taskParam;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    setaddEditBtn(false)
    inputRef.current.value = taskParam.task
    // setInterval(() => {

    //   inputRef.current.focus();
    // }, 5000);
  }
  return (
    <div className='todoApp' >
      <div className="inputButtonContainer">
        <input type="text" ref={inputRef} />
        <button onClick={handleAdd} >{addEditBtn ? 'Add' : 'Edit'}</button>
      </div>
      <div className="noteContainer">
        {taskList.map((taskObj, key) => {
          // console.log(taskObj);
          return (
            <div className="task" key={key}>
              <div
                className={taskObj.statusCompletion? 'lineref Done' : 'lineref notDone'}></div>

              <p> {taskObj.task} </p>
              <div className="btns">
                <button id="completeBtn" onClick = {()=>handleComplete(taskObj)} >
                  Done
                </button>
                <button
                  id="editBtn"
                  onClick={() => {
                    handleEdit(taskObj);
                  }}
                >
                  Edit
                </button>
                <button
                  id="delBtn"
                  onClick={() => {
                    handleDelete(taskObj);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default TodoApp