const { Sequelize } = require('../models');
const db = require('../models');
const Transaksi = db.transaksi;
const Op = Sequelize.Op;
const Kosan = db.tblkos;

// create transaksi user
exports.create = (req, res) => {
    // validasi id_penyewa dan id_kos
    if(!req.body.id_penyewa && !req.body.id_kos){
        res.status(400).send({
            message: 'id_penyewa dan id_kos tidak boleh kosong!'
        });
        return;
    }
    // create transaksi
    Transaksi.create({
        kode_transaksi: 'kosmu'+ new Date().getFullYear() + '-' + req.body.id_penyewa + '-' + req.body.id_kos,
        tgl_transaksi: new Date(),
        id_penyewa: req.body.id_penyewa,
        id_kosan: req.body.id_kos,
        n_kamar: req.body.n_kamar, 
        nominal: req.body.nominal, 
        status_transaksi: 'lanjutpembayaran',
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(data => {
        res.send({
            message: 'Berhasil menambahkan ke pembayaran, silahkan selesaikan pembayaran Anda.',
            data: data
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err || 'Internal Server Error!'
        });
    });
}

// find data transaksi by id_user
exports.findTransaksiByIdUser = (req, res) => {
  const id_user = req.headers.id_user;
  // validasi id_user
  if(!id_user){
    res.status(400).send({
      message: 'id_user tidak boleh kosong!'
    });
    return;
  }
  // find data transaksi
  Transaksi.findAll({
    where: {
      id_penyewa: id_user, 
    }
  })
  .then(data => {
    res.send({
      message: 'Data tersedia!',
      data: data
    });
  })
  .catch(err => {
    res.status(500).send({
      message: err || 'Internal Server Error!'
    });
  });
}
// find data transaksi belum terkonfirmasi
exports.findUnconfirmedTransaksi = (req, res) => {
  // find data transaksi
  Transaksi.findAll({
    where: {
        status_transaksi: 'selesai(user)'
    }
  })
  .then(data => {
    res.send({
      message: 'Data tersedia!',
      data: data
    });
  })
  .catch(err => {
    res.status(500).send({
      message: err || 'Internal Server Error!'
    });
  });
}

// selesaikan transaksi oleh user
exports.selesaikanTransaksiUser = (req, res) => {
    const id_tr = req.headers.id_transaksi;
    const id_kos = req.headers.id_kos
    // validasi id_transaksi
    if(!id_tr){
        res.status(400).send({
            message: 'id_transaksi tidak boleh kosong!'
        });
        return;
    }
    // update field status_transaksi
    Transaksi.update({
        status_transaksi: 'selesai(user)'
    }, {
        where: {
            id_transaksi: req.headers.id_transaksi,
            id_penyewa: req.headers.id_penyewa
        }
    })
    .then(data => {
        res.send({
            message: 'Pembayaran menunggu konfirmasi Admin, mohon selesaikan pembayaran dengan cara transfer ke rekening Admin dan kirim bukti transaksi ke CP Admin CekKosmu!',
            data: data
        });
        Kosan.increment('kamar_dipesan', {
            where: {
                id_kos: id_kos
            }
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err || 'Internal Server Error!'
        });
    });
}

// selesaikan transaksi oleh admin
exports.selesaikanTransaksiAdmin = (req, res) => {
    const id_tr = req.headers.id_transaksi;
    // validasi id_transaksi
    if(!id_tr){
        res.status(400).send({
            message: 'id_transaksi tidak boleh kosong!'
        });
        return;
    }
    // update field status_transaksi
    Transaksi.update({
        status_transaksi: 'selesai(user)OK'
    }, {
        where: {
            id_transaksi: req.headers.id_transaksi,
        }
    })
    .then(data => {
        res.send({
            message: 'Pembayaran Terkonfirmasi!',
            data: data
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err || 'Internal Server Error!'
        });
    });
}

// hapus transaksi by id_transaksi
exports.deleteTransaksi = (req, res) => {
    const id_tr =  req.body.id_transaksi;
    // validasi id_transaksi
    if(!id_tr){
        res.status(400).send({
            message: 'id_transaksi tidak boleh kosong!'
        });
        return;
    }
    // delete transaksi
    Transaksi.destroy({
        where: {
            id_transaksi: id_tr
        }
    })
    .then(data => {
        res.send({
            message: 'Berhasil menghapus data transaksi dengan id=' + id_tr,
            data: data
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err || 'Internal Server error!'
        });
    });
}