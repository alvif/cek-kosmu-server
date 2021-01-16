require('dotenv').config();
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const model = require('../models/index');
const Admin = require('../controllers/admin.controller');
const Owner = require('../controllers/owner.controller');
const Kosan = require('../controllers/kosan.controller');
const Pemesanan = require('../controllers/pemesanan.controller');
const Transaksi = require('../controllers/transaksi.controller');

// UPLOAD IMG
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/upload/kosan');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
var upload = multer({storage: storage}); 

function isAuthenticated(req, res, next){
  var token = req.body.token || req.query.token || req.headers.authorization;
  if(token){
    jwt.verify(token, process.env.SECRET, function(err, decoded){
      // verifikasi jwt
      if(err){
        res.json({message: "Gagal autentikasi token"});
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
router.get('/listkosan', isAuthenticated, async function(req, res, next) {
  try {
    const kosan = await model.tblkos.findAll({});
    if (kosan.length !== 0) {
      res.json({
        kosan
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

// get unverified kosan
router.get('/unverified-kosan', isAuthenticated, Kosan.findAllUnverifiedKosan);

// get unconfirmed pesanan
router.get('/unconfirmed-pesanan', isAuthenticated, Pemesanan.findUnconfirmed);

router.get('/unconfirmed-transaksi', isAuthenticated, Transaksi.findUnconfirmedTransaksi);

// konfirmasi pendaftaran kosan
router.post('/konfirmasi-pendaftaran', isAuthenticated, Admin.konfirmasiPendaftaranKosan);

// konfirmasi pendaftaran kosan
router.post('/konfirmasi-pemesanan', isAuthenticated, Admin.confirmPemesanan);

// konfirmasi transaksi 
router.post('/konfirmasi-transaksi', isAuthenticated, Transaksi.selesaikanTransaksiAdmin);


// login
router.post('/login', async function(req, res){
  try {
    await model.admin.findOne({
      where:{
        username_admin: req.body.username
      }
    }).then(admin =>{
      if(!admin){
        return res.status(404).send('User tidak ditemukan:(');
      }else if(req.body.username == undefined){
        return res.status(404).send('User tidak ditemukan:(');
      }else{
        if(admin.password_admin === req.body.password){
          var token = jwt.sign(admin.toJSON(), process.env.SECRET, {
            algorithm: 'HS256'
          });
          res.json({message: 'Berhasil login',username: req.body.username, token: token})
        }else{
          res.json({message: 'Password salah atau User tidak ditemukan :('})
        }
      }
    })
  } catch (error) {
    res.status(500).send('Internal Server Error -> ' + error);
  }
});

// POST foto kosan
router.post('/upload/imgkosan', upload.single('file'), function(req, res, next) {
  try {
    if(!req.file) {
      res.status(500);
      return next(err);
    }
    res.json({ 
      fileUrl: 'http://localhost:3002/upload/kosan/' + req.file.filename,
      fileName: req.file.filename 
    });
  } catch (error) {
    res.status(500).send('Internal Server Error -> ' + error);
  }
});

module.exports = router;
