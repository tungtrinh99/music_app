'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    hometown: DataTypes.STRING,
    debut_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};