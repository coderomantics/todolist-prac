
export class ApiClient {

  apiRoot = 'http://127.0.0.1:3004'

  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  //use static when you dw create a new instance of the class
  //just wanna access the functions in the class

  async getTodos () {
    const response = await fetch(this.apiRoot + '/tasks', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    const data = await response.json();
    console.log('Here is the data' , data);
    // console.log(data)
    // return data;
    return data;
  }
  
  async postTodo (todo) {
    console.log('Here is the todo: ', todo)
    const post = await fetch(this.apiRoot + '/tasks', {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify(todo),
    });
    const data = await post.json();
    return data;
  }

  async deleteTodo (todo) {
    const del = await fetch(this.apiRoot + '/tasks', {
      method: 'DELETE',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify(todo),
    });
    const data = await del.json();
    return data;
  }
}