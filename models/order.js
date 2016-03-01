"use strict";

module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define("Order", {
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.ENUM('BASKET', 'PAYED', 'DISPATCHED', 'DELIVERED')
  }, {
    classMethods: {
      associate: function (models) {
        Order.hasMany(models.OrderItem)
      }
    }
  });

  return Order;
};