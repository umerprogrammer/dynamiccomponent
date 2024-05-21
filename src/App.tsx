import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import MyTable from './components/MyTable';

function App() {
  let task = {
    id : 0,
    priority: "",
    status: "",
    userName: "",
    task: ""
  }
  let [myTask,setMyTask] = useState(task);
  let [tasks,setTasks] = useState<any>([]);

  let addTask = ()=>{
    tasks.push({...myTask});
    setTasks([...tasks])
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-container g-0 d-flex justify-content-center align-items-center">
          <div className="container todo-container w-75 border shadow rounded-2 p-2 ">
            <div className='d-flex justify-content-center w-10 gap-2 p-2'>
              <MyInput inputName='todo' inputLabel='Task' inputType='text' inputValue={myTask.task} inputChange={(e) => {
                  setMyTask({...myTask,task : e.target.value})
                  addTask();
              }} />
              <MyButton btnClass='btn btn-sm btn-primary mt-8 mybutton' btnValue='Add'  btnIcon={faPlus} />
            </div>
            <hr />
            <div className='h-75 accordion overflow-auto '>
            <MyTable />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
