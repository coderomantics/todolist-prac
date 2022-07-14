export default class Todo {
    id;
    task;
    status;
    urgency;
  
    constructor(task, status, urgency, id){
      this.task = task;
      this.status = status;
      this.urgency = urgency;
      this.id = id
    }
    setId(id) {
      this.id = id
    }
}