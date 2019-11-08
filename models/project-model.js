const db = require('../data/db-config');

module.exports = {
    getProjects,
    addProject
}

async function getProjects(){
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

async function addProject(project){
    let createdId = await db('projects').insert(project)
    let response = await db('projects').where({id: createdId[0]})
    return response[0]
}