const { Sequelize } = require('../models');
const db = require('../models');
const User = db.users;
const Op = Sequelize.Op;

/* Create an User's data */
exports.create = (req, res) => {
  // validate request
  if(!req.body.nama){
    res.status(400).send({
      message: "Nama tidak boleh kosong!"
    });
    return;
  }
  // create user's object
  const user = {
    nama_user: req.body.nama,
    alamat_user: req.body.alamat,
    telpon_user: req.body.telpon, 
    email_user: req.body.email,
    username: req.body.username,
    password: req.body.password,
    tgllahir: req.body.tgllahir,
    createdAt: new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Jakarta'
    }),
    updatedAt: new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Jakarta'
    })
  }
  // save user's data to database
  User.create(user)
    .then(data => {
      res.send({
        message: "Berhasil menambahkan user baru :)",
        inserted_data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error while creating data."
      });
    });
}
/* Find en User by id */
exports.findOne = (req, res) => {

}
/* Find all User */
exports.findAll = (req, res) => {

}
/* Update an User's data by id */
exports.update = (req, res) => {

}
/* Delete an User by id */
exports.delete = (req, res) => {

}
/* Delete all User */
exports.deleteAll = (req, res) => {

}