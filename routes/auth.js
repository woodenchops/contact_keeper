const express = require('express');
const router = express.Router();


// @route   GET api/auth
// @desc    get logged in user
// @access  private
router.get('/', (req, res) => {
    res.send('get logged in User')
});


// @route   POST api/auth
// @desc    Auth user and get token
// @access  public
router.post('/', (req, res) => {
    res.send('log in User')
});


module.exports = router;