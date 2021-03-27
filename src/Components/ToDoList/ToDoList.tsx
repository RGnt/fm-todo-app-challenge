import React from "react";
import { ToDosList } from "../../fakedata/data";
import { ToDo } from "../../models/todo";
import { ToDoCard } from "../ToDoCard/ToDoCard";

export const ToDoList = (props: any) => { //to be typed
    const {orderedTodos} = props;
    return (
      <div>
      {orderedTodos.map((todo: string) => {
        return (
          <ToDoCard key={todo} 
          {...ToDosList.filter((todoItem: ToDo) => todoItem.todoid === todo)[0]} />
          )
      })}
      </div>
    )
  }