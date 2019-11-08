const express = require('express');

const db = require('./resource-model');

const router = express.Router();

router.get('/', async (req,res) => {
    try{
        let response = await db.getResources()
        res.status(200).json(response)
    }
    catch (error){
        res.status(500).json({error: `An error occurred retrieving resources ${error}`})
    }
    
})

router.post('/', async (req,res) => {
    try{
        const resource = req.body;
        let response = await db.addResource(resource)
        res.status(200).json(response)
    }
    catch (error){
        res.status(500).json({error: `An error occurred saving resources to DB${error}`})
    }
    
})

module.exports = router;