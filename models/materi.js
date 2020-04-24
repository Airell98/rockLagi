'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;

  const Model = Sequelize.Model
class Materi extends Model{}

  Materi.init({
    name: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    hari: DataTypes.STRING
  }, {sequelize});
  Materi.associate = function(models) {
    // associations can be defined here
    Materi.belongsToMany(models.Jurusan,{through:models.JurusanMateri})
  };
  return Materi;
};