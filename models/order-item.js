"use strict";
module.exports = (sequelize, DataTypes) => {
  var OrderItem = sequelize.define("OrderItem", {
    size: DataTypes.INTEGER,
    count: DataTypes.INTEGER

  }, {
    classMethods: {
      associate: models => OrderItem.hasOne(models.ShoeModel)
    }
  });

  return OrderItem;
};