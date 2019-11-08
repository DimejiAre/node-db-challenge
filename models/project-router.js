const express = require('express');

const router = express.Router();

const db = require('./project-model');

router.get('/', async (req,res) => {
    try {
        const response = await db.getProjects();
        res.status(200).json(response)
    }
    catch (error){
        res.status(500).json({error: `An error occurred retrieving projects ${error}`})
    }
    
})

router.get('/:id/tasks', async (req,res) => {
    try {
        const id = req.params.id;
        const response = await db.getTasks(id)
        res.status(200).json(response)
    }
    catch (error){
        res.status(500).json({error: `An error occurred retrieving tasks ${error}`})
    }
    
})

router.post('/', async (req,res) => {
    try{
        const project = req.body;
        let response = await db.addProject(project)
        res.status(201).json(response)
    }
    catch (error){
        res.status(500).json({error: `An error occurred saving projects to DB${error}`})
    }
})

router.post('/tasks', async (req,res) => {
    try{
        const task = req.body;
        let response = await db.addTask(task)
        res.status(201).json(response)
    }
    catch (error){
        res.status(500).json({error: `An error occurred saving task to DB${error}`})
    }
})

module.exports = router;