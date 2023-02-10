const indexModel = require('../models/index.model');
module.exports = {
    get: async function(req, res) {
        res.render('index', { title: 'Todo List', tasks: await indexModel.find({}) });
    },
    post: async function(req, res) {
        const id = req.body.id;
        const task = req.body.task;
        const status = req.body.status;
        const query = indexModel.findOneAndUpdate({id: id}, {task: task, status: status});
        const changedTask = await query.clone().exec();
        res.send('Updated!');
    },
    put: async function(req, res) { 
        const id = req.body.id;   
        const task = req.body.task;
        const status = false;
        const newTask = await indexModel.create({ id, task, status });
        res.send('Created!');
    },  
    delete: async function(req, res) {    
        const id = req.params.id;
        const query = indexModel.findOneAndDelete({id: id});
        const deletedTask = await query.clone().exec();
        res.send('Deleted!');
    }
}