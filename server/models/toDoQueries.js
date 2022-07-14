const {ToDo} = require('./db');

async function getToDos() {
    const toDo = await ToDo.findAll()
    console.log(toDo);
    return toDo;
}

async function postToDos({task, status, urgency}) {
    const post = await ToDo.create({task, status, urgency})
    return post;
}

async function deleteToDos({id}) {
    console.log(id)
    const del = await ToDo.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {getToDos, postToDos, deleteToDos}