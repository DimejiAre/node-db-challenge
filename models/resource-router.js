const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json('Welcome to resource router')
})

module.exports = router;