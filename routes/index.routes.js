var express = require('express');
var router = express.Router();
const model = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST API Cek Kosmu' });
});

/* GET list tempat kos*/
router.get('/listkosan', async function(req, res, next){
  try {
    const kosan = await model.tblkos.findAll({
      where: {
        status_kosan: 'verified'
      }
    });
    if (kosan.length !== 0) {
      res.json(
        kosan
      )
    } else {
      res.json({
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'data': {}
    })
  }
})

module.exports = router;
