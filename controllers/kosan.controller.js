const { Sequelize } = require('../models');
const db = require('../models');
const Kosan = db.tblkos;
const Owner = db.owners;
const Op = Sequelize.Op;

/* Create an Kosan's data */
exports.create = (req, res) => {
  var kos = {
    id_pemilik: parseInt(req.body.id_pemilik),
    nama_kos: req.body.nama_kos,
    alamat_kos: req.body.alamat_kos,
    luas_kamar: parseInt(req.body.luas_kamar),
    jarak_kos: parseInt(req.body.jarak_kos),
    jumlah_kamar: parseInt(req.body.jumlah_kamar),
    kamar_dipesan: 0,
    kamar_dihuni: 0, 
    fasilitas: req.body.fasilitas, 
    harga_sewa: parseInt(req.body.harga_sewa),
    status_kosan: 'after register', 
    img: '',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  Kosan.create(kos)
  .then(data => {
    res.send({
      message: "Berhasil registrasi Kos baru!!", 
      inserted_data: data
    });
  })
  .catch(error => {
    res.status(500).send({
      message: error.message || "Error while adding kos data"
    });
  })
}
/* Find Kosan by id */
exports.findOne = (req, res) => {

}
/* Find all Kosan */
exports.findAll = (req, res) => {

}
/* Mencari dan menampilkan kosan yang belum terverifikasi */
exports.findAllUnverifiedKosan = (req, res) => {
  const status = req.headers.status_kosan;
  const kondisi = status ? { status_kosan:{ [Op.like]: `%${status}%`} } : null;
  Kosan.findAll({
    where: kondisi
  })
  .then(data => {
    var arr_id_owner = []
    for (let i = 0; i < data.length; i++) {
      arr_id_owner.push(data[i].id_pemilik);
    }
    Owner.findAll({
      where: {
        id_owner: arr_id_owner
      }
    })
    .then(odata => {
      res.send({
        message: data.length !== 0 ? 'Data Ditemukan!' : 'Data Kosong!', 
        data: data,
        data_owner: odata
      })
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || 'Error Occured :('
      });
    })
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Error Occured :('
    });
  });
}
/* Update an Kosan's data by id */
exports.update = (req, res) => {

}
/* Delete an Kosan by id */
exports.delete = (req, res) => {

}
/* Delete all Kosan */
exports.deleteAll = (req, res) => {

}