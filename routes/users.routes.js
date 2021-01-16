var express = require('express');
var jwt = require('jsonwebtoken');
require('dotenv').config();
var router = express.Router();
const model = require('../models/index')
const User = require('../controllers/user.controller');
const Pemesanan = require('../controllers/pemesanan.controller');
const Transaksi = require('../controllers/transaksi.controller');

function isAuthenticated(req, res, next){
  // define token 
  var token = req.body.token || req.query.token || req.headers.authorization || req.headers.token;
  if(token){
    jwt.verify(token, process.env.SECRET, function(err, decoded){
      // verifikasi jwt
      if(err){
        res.json({message: "Gagal autentikasi users token"});
      }else{
        req.decoded = decoded;
        next();
      }
    });
  }else{
    return res.status(403).send({message: "Tidak ada token tersedia"});
  }
}

/* GET users listing. */
router.get('/', isAuthenticated, async function(req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        'status': 'OK',
        'message': 'Data Tersedia',
        'data': users
      })
    } else {
      res.json({
        'status': 'ERROR',
        'message': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'message': err.messages,
      'data': {}
    })
  }
});

/* GET users by id */
router.get('/usr/:id', isAuthenticated, async function(req, res, next){
  try {
    const user = await model.users.findOne(
      { 
        where: { 
          id_user: req.params.id 
        }
      });
    if(user.length !== 0){
      res.json(
        user
      );
    }else{
      res.json({
        'message': 'Not Found :('
      });
    }
  } catch (error) {
    res.json({
      'status': 'ERROR',
      'message': error.message
    })
  }
});

// get unconfirmed pesanan
router.get('/unconfirmed-pesanan', isAuthenticated, Pemesanan.findUnconfirmed);

// get data pesanan
router.get('/pesanan', isAuthenticated, Pemesanan.findPesananByUserId);

// get data transaksi
router.get('/transaksi', isAuthenticated, Transaksi.findTransaksiByIdUser);

// User SignUp 
router.post('/signup', User.create);

// Pesan Kamar
router.post('/buatpesanan', Pemesanan.create);

// Tambahkan ke pembayaran
router.post('/tambah-ke-pembayaran', isAuthenticated, Pemesanan.lanjutkanPesanan);

// transaksi baru
router.post('/tambah-transaksi', isAuthenticated, Transaksi.create);

// transaksi diselesaikan
router.post('/selesaikan-transaksi', isAuthenticated, Transaksi.selesaikanTransaksiUser);


// login
router.post('/login', async function(req, res){
  try {
    await model.users.findOne({
      where:{
        username: req.body.username
      }
    }).then(user =>{
      if(!user){
        return res.status(404).send('User tidak ditemukan:(');
      }else if(req.body.username == undefined){
        return res.status(404).send('User tidak ditemukan:(');
      }else{
        if(user.password === req.body.password){
          var token = jwt.sign(user.toJSON(), process.env.SECRET, {
            algorithm: 'HS256'
          });
          res.json({message: 'Berhasil login', id_user: user.id_user, username: req.body.username, token: token})
        }else{
          res.status(404).send('Password salah atau User tidak ditemukan:(');
        }
      }
    })
  } catch (error) {
    res.status(500).send('Internal Server Error'/** + error*/);
  }
});

module.exports = router;
