'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transaksi.init({
    id_transaksi: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(5)
    },
    kode_transaksi: DataTypes.STRING,
    tgl_transaksi: DataTypes.DATE,
    id_penyewa: DataTypes.INTEGER,
    id_kosan: DataTypes.INTEGER,
    n_kamar: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER,
    status_transaksi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};