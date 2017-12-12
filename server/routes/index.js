var express = require('express')
var router = express.Router()
var models = require('../models')


/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' })
  models.User.create({ username: 'test' }).then(user => {
    console.log(user)
    res.render('index', { title: 'Express' })
  })
})

module.exports = router
