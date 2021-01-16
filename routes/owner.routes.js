require('dotenv').config();
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const model = require('../models/index');
const owner = require('../controllers/owner.controller');
const kosan = require('../controllers/kosan.controller');
const Pesanan = require('../controllers/pemesanan.controller');

// upload image
var multer = require('multer');
const pemesanan = require('../models/pemesanan');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/upload/kosan');
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = '';
    switch (file.mimetype) {
      case 'image/gif':
        filetype = 'gif'
        break;
      case 'image/png':
        filetype = 'png';
        break;
      case 'image/jpeg':
        filetype = 'jpg';
        break;
      default:
        break;
    }
    cb(null, 'kosan-' + Date.now() + '.' + filetype);
  }
});
var upload = multer({storage: storage});

// authenticator
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

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// POST foto kosan
router.post('/upload/imgkosan', upload.single('file'), function(req, res, next) {
  try {
    if(!req.file) {
      res.status(500);
      return next();
    }
    res.setHeader('X-Powered-By', 'Made with love by Alvif S.M. (<3 ExpressJS)');
    res.json({ 
      message: 'Success upload!',
      fileUrl: 'http://localhost:3002/upload/kosan/' + req.file.filename,
      fileName: req.file.filename 
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: 'Internal Server Error => ' + err
    });
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST API Cek Kosmu (OWNER)' });
});

/* GET single owner's data */
router.get('/data/:id', owner.findOne);

/* GET list kosan dari owner tunggal */
router.get('/listkosan', isAuthenticated, owner.findKosan);

// GET unconfirmed pesanan
router.get('/unconfirmed-pesanan', isAuthenticated, Pesanan.findUnconfirmed);

// Update ketersediaan kamar
router.post('/confirm-pesanan', isAuthenticated, Pesanan.confirmPemesanan);

// login
router.post('/login', async function(req, res){
  try {
    await model.owners.findOne({
      where:{
        username: req.body.username
      }
    }).then(owner =>{
      if(!owner){
        return res.status(404).send('User tidak ditemukan:(');
      }else if(req.body.username == undefined){
        return res.status(404).send('User tidak ditemukan:(');
      }else{
        if(owner.password === req.body.password){
          var token = jwt.sign(owner.toJSON(), process.env.SECRET, {
            algorithm: 'HS256'
          });
          res.json({message: 'Berhasil login', id_owner: owner.id_owner, nama_owner: owner.nama_owner, token: token})
        }else{
          res.json({message: 'Password salah atau User tidak ditemukan :('})
        }
      }
    })
  } catch (error) {
    res.status(500).send('Internal Server Error -> ' + error);
  }
});

/* Sign Up Owner Kos API */
router.post('/signup', owner.create);

/* Tambah tempat Kos */
router.post('/tambah-kosan', kosan.create)

/* Update data Owner dengan id */
router.put('/update/:id', isAuthenticated, owner.update);

module.exports = router;