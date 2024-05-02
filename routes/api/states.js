const express = require('express');
const router = express.Router();   // Import the express router
const State = require('../../models/States'); // Import the State model

//get all states
router.get('/',async (req, res) => {
    try {
        const states = await State.find();
        res.json(states);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



//get one state
router.get('/:id', (req, res) => {
    
});
//create a new state
router.post('/', async (req, res) => {
    const state = new State({
        name: req.body.name,
        abbreviation: req.body.abbreviation
    });
    res.send('Create a new state');
});
//update a state
router.patch('/:id', (req, res) => {
    res.send('Update a state');
});
//delete a state
router.delete('/:id', (req, res) => {
    res.send('Delete a state');
});






module.exports = router;            // Export the router
