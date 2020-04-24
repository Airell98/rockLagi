'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;

  const Model = Sequelize.Model

class Student extends Model{
  fullName(){
    return this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase()
  }
}

  Student.init({
    firstName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg :'First Name Is Required'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg :'First Name Is Required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
              isEmail(value){
                if(value.indexOf('@')== -1){
                  throw new Error('Incorrect Email')
                }
              }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg :'Phone Number Is Required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg :'Password Is Required'
        }
      }
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      validate:{
        notEmpty:{
          msg :'Birth Date Name Is Required'
        }
      }
    },
    JurusanId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg : `You haven't chose your Major`
        }
      }
    },
    userName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg :'Username Is Required'
        }
      }
    }
  }, {sequelize});
  const bcrypt = require('bcrypt')

Student.beforeCreate((instance, option)=>{
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(instance.password, salt);
  instance.dataValues.password = hash
})

  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.Jurusan)
  };
  return Student;
};