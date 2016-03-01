"use strict";

module.exports = (sequelize, DataTypes) => {
  var ShoeModel = sequelize.define("ShoeModel", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    26: DataTypes.INTEGER,
    27: DataTypes.INTEGER,
    28: DataTypes.INTEGER,
    29: DataTypes.INTEGER,
    30: DataTypes.INTEGER,
    31: DataTypes.INTEGER,
    32: DataTypes.INTEGER,
    33: DataTypes.INTEGER,
    34: DataTypes.INTEGER,
    35: DataTypes.INTEGER,
    36: DataTypes.INTEGER,
    37: DataTypes.INTEGER,
    38: DataTypes.INTEGER,
    39: DataTypes.INTEGER,
    40: DataTypes.INTEGER,
    41: DataTypes.INTEGER,
    42: DataTypes.INTEGER,
    43: DataTypes.INTEGER,
    44: DataTypes.INTEGER,
    45: DataTypes.INTEGER,
    46: DataTypes.INTEGER
  }, {
    classMethods: {
      // associate: (models) => {
      //   ShoeModel.hasMany(models.ShoeModelItem)
      // }
    }
  });

  ShoeModel.build({
    name: 'very important shoe model',
    description: 'dsdas',
    price: 12.55
  }, function () {
    console.log('created');
  });

  return ShoeModel;
};