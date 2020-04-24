'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;

  const Model = Sequelize.Model

class JurusanMateri extends Model{}


  JurusanMateri.init({
    JurusanId: DataTypes.INTEGER,
    MateriId: DataTypes.INTEGER
  }, {sequelize});
  JurusanMateri.associate = function(models) {
    // associations can be defined here
  };
  return JurusanMateri;
};