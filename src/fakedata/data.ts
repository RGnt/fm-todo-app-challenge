import { ToDoStatus } from "../models/status";

export const ToDosList = [
    {
        todoid: "24b6ffd4-ac6a-4a17-ad5d-327ab0aa7411",
        status: ToDoStatus.pending,
        owninguserid: "630f35f1-8796-4429-9f45-5200661cc95c",
        createdby: "630f35f1-8796-4429-9f45-5200661cc95c",
        description: "Some test text for a todo that's pending",
        createdon: new Date(),
        startedon: new Date(),
        completedon: new Date(),
        modifiedon: new Date()
      },
      {
        todoid: "321897b3-2042-45fd-abf0-d3fd8618dc29",
        status: ToDoStatus.started,
        owninguserid: "630f35f1-8796-4429-9f45-5200661cc95c",
        createdby: "630f35f1-8796-4429-9f45-5200661cc95c",
        description: "Some test text for a todo that's started",
        createdon: new Date(),
        startedon: new Date(),
        completedon: new Date(),
        modifiedon: new Date()
      },
      {
        todoid: "ecd116d7-cb63-4862-8714-bcad4b1e71cd",
        status: ToDoStatus.completed,
        owninguserid: "630f35f1-8796-4429-9f45-5200661cc95c",
        createdby: "630f35f1-8796-4429-9f45-5200661cc95c",
        description: "Some test text for a todo that's completed",
        createdon: new Date(),
        startedon: new Date(),
        completedon: new Date(),
        modifiedon: new Date()
      },
    ]
    
    export const ToDosOrderList = [
      "24b6ffd4-ac6a-4a17-ad5d-327ab0aa7411",
      "321897b3-2042-45fd-abf0-d3fd8618dc29",
      "ecd116d7-cb63-4862-8714-bcad4b1e71cd"
    ];