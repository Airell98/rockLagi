'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;

  const Model = Sequelize.Model

class Jurusan extends Model{
  static cari(){
    return Jurusan.findAll()
  }
}
  Jurusan.init({
    name: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    batch: DataTypes.INTEGER
  }, {sequelize});
  Jurusan.associate = function(models) {
    // associations can be defined here
    Jurusan.hasMany(models.Student)

    Jurusan.belongsToMany(models.Materi,{through: models.JurusanMateri})
  };
  return Jurusan;
};