const db = require('../data/db-config');

module.exports = {
    getProjects,
    getTasks,
    addProject,
    addTask
}

async function getProjects(){
    try{
        const response = await db('projects')
        const newResponse = response.map(item => {
            if(item.completed === 0){
                item.completed = false
            } else {
                item.completed = true
            }
            return item
        })
        return newResponse
    }
    catch(error){
        throw new Error(error)
    }
}

async function getTasks(project_id){
    try{
        let response = await db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.name', 'p.description', 't.description', 't.notes', 't.completed')
        .where({'p.id': project_id})

        const newResponse = response.map(item => {
            if(item.completed === 0){
                item.completed = false
            } else {
                item.completed = true
            }
            return item
        })
        return newResponse
    }
    catch(error){
        throw new Error(error)
    }
}

async function addProject(project){
    try{
        let createdId = await db('projects').insert(project)
        let response = await db('projects').where({id: createdId[0]})
        if (response[0].completed === 0){
            response[0].completed = false
        } else {
            response[0].completed = true
        }
        return response[0]
    }
    catch(error){
        throw new Error(error)
    }
    
}

async function addTask(task){
    try{
        let createdId = await db('tasks').insert(task)
        let response = await db('tasks').where({id: createdId[0]})
        if (response[0].completed === 0){
            response[0].completed = false
        } else {
            response[0].completed = true
        }
        return response[0]
    }
    catch(error){
        throw new Error(error)
    }
    
}