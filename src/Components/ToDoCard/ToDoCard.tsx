import { ToDo } from "../../models/todo";

export const ToDoCard = (props: ToDo) => {
    console.log('todocard received', props);
    const {description} = props;
    return (
      <div>
        <p>{description}</p>
      </div>
    )
  }