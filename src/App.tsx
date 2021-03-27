import React from 'react';
import { ToDoList } from './Components/ToDoList/ToDoList';
import {ToDosOrderList} from './fakedata/data';


function App() {
  return (
    <div className="App">
      <ToDoList orderedTodos={ToDosOrderList} />
    </div>
  );
}

export default App;
