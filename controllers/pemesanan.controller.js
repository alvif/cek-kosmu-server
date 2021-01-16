const db = require('../models');
const User = db.users;
const Pemesanan = db.pemesanan;
const Owner = db.owners;
const Kosan = db.tblkos;
const Op = db.Sequelize.Op;

// Create pemesanan
exports.create = (req, res) => {
  // validate lama sewa
  if(!req.body.lama_sewa){
    res.status(400).send({
      message: "Mohon isi lama sewa!!"
    });
    return;
  }
  // Create objek pemesanan
  const pemesanan = {
    id_user: req.body.id_user,
    id_kos: req.body.id_kos, 
    n_kamar: 1,
    lama_tinggal: req.body.lama_sewa,
    nominal: req.body.nominal,
    status_pesanan: "unconfirmed",
    ketersediaan: "unconfirmed",
    createdAt: new Date(),
    updatedAt: new Date()
  }
  // Save pemesanan baru ke database
  Pemesanan.create(pemesanan)
  .then(data => {
    res.send({
      message: "Berhasil membuat pesanan Anda!!!", 
      inserted_data: data
    });
  })
  .catch(err => {
    res.status(500).send({
      message: err || "Error while creating data."
    });
  })
}

// menampilkan pesanan unconfirmed
exports.findUnconfirmed = (req, res) =>{
  const status = req.headers.status_pesanan;
  const kondisi = status ? { status_pesanan : { [Op.like]: `%${status}%`} } : null;
  Pemesanan.findAll({
    where : kondisi
  })
  .then(data =>{
    var arr_id_kos = [];
    var arr_id_user = [];
    var arr_id_owner = [];
    for (let i = 0; i < data.length; i++) {
      arr_id_kos.push(data[i].id_kos);
      arr_id_user.push(data[i].id_user);
    }
    Kosan.findAll({
      where: {
        id_kos: arr_id_kos
      }
    })
    .then(kdata => {
      for (let i = 0; i < kdata.length; i++) {
        arr_id_owner.push(kdata[i].id_pemilik);
      }
      Owner.findAll({
        where: {
          id_owner : arr_id_owner
        }
      })
      .then(odata => {
        User.findAll({
          where: {
            id_user: arr_id_user
          }
        })
        .then(udata => {
          if(!data&&!kdata&&!odata&&!udata){
            res.status(404).send({
              message: 'Data tidak ditemukan!'
            });
          }else{
            res.send({
              message: 'Data ditemukan!',
              data: data, 
              data_kosan: kdata, 
              data_owner: odata,
              data_user: udata
            });
          }
        })
      })
    })
  })
  .catch(err => {
    res.status(500).send({
      message: 'Internal Server Error!' + err
    });
  });
}

// konfirmasi ketersediaan kamar oleh owner
exports.confirmPemesanan = (req, res) =>{
  const id_pemesanan = req.headers.id_pemesanan;
  if(!id_pemesanan){
    res.status(400).send({
      message: 'id_pemesanan tidak boleh kosong!!'
    });
    return;
  }
  Pemesanan.update({
    ketersediaan: req.headers.ketersediaan
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

// find pesanan by id_user
exports.findPesananByUserId = (req, res) => {
  const id_usr = req.headers.id_user;
  // validasi id_user
  if(!id_usr){
    res.status(400).send({
      message: 'id_user tidak boleh kosong!'
    });
    return;
  }
  // cari data pesanan
  Pemesanan.findAll({
    where: {
      id_user: id_usr
    }
  })
  .then(data => {
    res.send({
      message: 'Data ditemukan!',
      data: data
    });
  })
  .catch(err => {
    res.status(500).send({
      message: err || 'Internal Server Error!'
    });
  });
}

exports.lanjutkanPesanan = (req, res) => {
  const id_pesanan = req.headers.id_pesanan;
  if(!id_pesanan){
    res.status(400).send({
      message: 'id_pesanan tidak boleh kosong!'
    });
    return;
  }
  Pemesanan.update({
    status_pesanan: req.body.status_pesanan
  }, {
    where: {
      id_pesanan: id_pesanan
    }
  })
  .then(data => {
    res.send({
      message: 'Pesanan dilanjutkan ke pembayaran!', 
      data: data
    })
  })
  .catch(err => {
    res.status(500).send({
      message: err || 'Internal Server Error!'
    })
  });
}