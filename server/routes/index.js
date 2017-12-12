var express = require('express')
var router = express.Router()
var models = require('../models')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

router.post('/', function (req, res, next) {
  let { username, email } = req.body
  models.User.create({ username, email }).then(user => {
    res.json({ msg: 'User registered successfully' })
  })
})

module.exports = router