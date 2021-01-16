'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pemesanan.init({
    id_pesanan: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    id_user: DataTypes.INTEGER(5),
    id_kos: DataTypes.INTEGER(5),
    n_kamar: DataTypes.INTEGER,
    lama_tinggal: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER,
    status_pesanan: DataTypes.STRING,
    ketersediaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pemesanan',
  });
  return pemesanan;
};