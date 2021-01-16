'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tblkos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tblkos.init({
    id_kos: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    id_pemilik:{
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
    nama_kos: DataTypes.STRING,
    alamat_kos: DataTypes.STRING,
    luas_kamar: DataTypes.INTEGER,
    jarak_kos: DataTypes.INTEGER,
    jumlah_kamar: DataTypes.INTEGER,
    kamar_dipesan: DataTypes.INTEGER,
    kamar_dihuni: DataTypes.INTEGER,
    fasilitas: DataTypes.STRING,
    harga_sewa: DataTypes.INTEGER,
    status_kosan: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblkos',
  });
  return Tblkos;
};