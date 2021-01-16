'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  admin.init({
    id_admin: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama_admin: DataTypes.STRING,
    email_admin: DataTypes.STRING,
    username_admin: DataTypes.STRING,
    password_admin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};