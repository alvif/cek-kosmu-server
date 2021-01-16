'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class owners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  owners.init({
    id_owner: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nama_owner: DataTypes.STRING,
    alamat_owner: DataTypes.STRING,
    TTL: DataTypes.STRING,
    jk: DataTypes.STRING,
    no_telpon: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'owners',
  });

  return owners;
};