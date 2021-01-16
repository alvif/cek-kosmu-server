const db = require('../models');
const Owner = db.owners;
const Kosan = db.tblkos;
const Op = db.Sequelize.Op;

/* Create Owner */ 
exports.create = (req, res) => {
  // validate nama
  if(!req.body.nama){
    res.status(400).send({
      message: "Nama tidak boleh kosong!"
    });
    return;
  }
  // create an Owner object
  const owner = {
    nama_owner: req.body.nama,
    alamat_owner: req.body.alamat,
    TTL: req.body.ttl,
    jk: req.body.jk,
    no_telpon: req.body.telp,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  // Save new Owner's data to database
  Owner.create(owner)
    .then(data => {
      res.send({
        message: "Berhasil menambahkan owner baru :)",
        inserted_data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error while creating data."
      });
    });
}

// Read all Owner's data
exports.findAll = (req, res) => {

}

// Read single Owner's data
exports.findOne = (req, res) => {
  const id = req.params.id;
  Owner.findByPk(id)
    .then(data => {
      res.send({
        message: data != null ? "Data owner ditemukan!" : "Data tidak ditemukan :(" , 
        owner: data
      })
      .catch(err => {
        res.status(500).send({
          message: "Error while finding owner'data with id=" + id,
          error: err.message
        })
      });
    });
}

// Read data kosan
exports.findKosan = (req, res) => {
  const id = req.headers.owner_id;
  Kosan.findAll({
    where: {id_pemilik : id}
  })
  .then(data => {
    res.send({
      message: data != null ? "Data ditemukan!" : 'Data Kosong!',
      data: data
    });
  })
  .catch(err => {
    res.status(500).send({
      message: "Error while finding data with id=" + id,
      error: err.message
    })
  })
}

// Update an Owner's data
exports.update = (req, res) => {
  const id = req.params.id;
  Owner.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if(num == 1){
      res.send({
        message: `Data owner dengan id=${id} berhasil diperbarui!`
      });
    }else{
      res.send({
        message: 'Gagal memperbarui data owner :('
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: 'Error while updating data :(',
      error: err.message
    });
  });
}

// Delete an Owner's data
exports.delete = (req, res) => {

}

// Delete all Owner's data
exports.deleteAll = (req, res) => {

}