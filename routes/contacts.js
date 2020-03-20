const express = require('express');
const router = express.Router();


// @route   GET api/contacts
// @desc    Register a user
// @access  public

router.get('/', (req, res) => {
    res.send('get all contacts');
});

// @route   POST api/contacts
// @desc    add new user
// @access  private

router.post('/', (req, res) => {
    res.send('add contact');
});

// @route   PUT api/contacts/:id
// @desc    update user
// @access  private

router.put('/:id', (req, res) => {
    res.send('update contact');
});

// @route   DELETE api/contacts/:id
// @desc    delete user
// @access  private

router.delete('/:id', (req, res) => {
    res.send('delete contact');
});


module.exports = router;