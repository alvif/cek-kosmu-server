const { Sequelize } = require('../models');
const db = require('../models');
const Admin = db.admins;
const Kosan = db.tblkos;
const Pemesanan = db.pemesanan;
const Op = Sequelize.Op;

// konfirmasi pendaftaran kosan
exports.konfirmasiPendaftaranKosan = (req, res) => {
  const id_kos = req.headers.id_kos;
  // validasi id_kos
  if(!id_kos){
    res.status(400).send({
      message: 'id_kos tidak boleh kosong!'
    });
    return;
  }
  // konfirmasi data pendaftaran
  Kosan.update({
    status_kosan: req.headers.status_kosan
  }, {
    where: {
      id_kos: id_kos
    }
  })
  .then(data => {
    res.send({
      message: 'Berhasil konfirmasi pendaftaran kos!', 
      data: data
    });
  })
  .catch(err => {
    res.status(500).send({
      message: err || 'Internal Server Error!'
    });
  });
}

// konfirmasi ketersediaan kamar oleh admin
exports.confirmPemesanan = (req, res) =>{
  const id_pemesanan = req.headers.id_pemesanan;
  if(!id_pemesanan){
    res.status(400).send({
      message: 'id_pemesanan tidak boleh kosong!!'
    });
    return;
  }
  Pemesanan.update({
    status_pesanan: req.headers.status_pesanan
  }, {
    where: {
      id_pesanan: id_pemesanan
    }
  })
  .then(data => {
    res.send({
      message: 'Berhasil update data dengan id_pesanan=' + req.headers.id_pemesanan,
      data: data
    });
  })
  .catch(err => {
    res.status(500).send({
      message: err || 'Internal Server Error!'
    });
  });
}