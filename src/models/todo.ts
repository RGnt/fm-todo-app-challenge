import { ToDoStatus } from './status';

export interface ToDo {
    todoid: string;
    status: ToDoStatus;
    owninguserid: string;
    createdby:string; 
    description: string;
    createdon: Date;
    startedon: Date;
    completedon: Date;
    modifiedon: Date;
}