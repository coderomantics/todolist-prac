const model = require('../models/toDoQueries');

async function retrieveToDos (req, res) {
    const toDos = await model.getToDos();
    console.log(toDos)
    res.json(toDos);
    res.status(200);
}

async function addToDo (req, res) {
    console.log(req.body);
    const post = await model.postToDos(req.body);
    res.json(post);
    res.status(200);
} 

async function deleteToDo (req, res) {
    console.log(req.body)
    const del = await model.deleteToDos(req.body);
    res.json(del);
    res.status(200);
}
    

module.exports = {retrieveToDos, addToDo, deleteToDo}