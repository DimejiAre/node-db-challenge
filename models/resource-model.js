const db = require('../data/db-config');

module.exports = {
    getResources,
    addResource
}

function getResources(){
        return db('resources')
}

async function addResource(resource){
    try{
        let createdId = await db('resources').insert(resource)
        console.log(createdId)
        let response = await db('resources').where({id: createdId[0]})
        return response[0]
    }
    catch (error){
        throw new Error(error)
    }
    
}