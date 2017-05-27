var express = require('express')
  , router = express.Router()

// Car brands page
router.get('/', function(req, res) {
  res.send('This is the default rout for user');
})

module.exports = router
