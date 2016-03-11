'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.ENUM('BASKET', 'PAYED', 'DISPATCHED', 'DELIVERED')
  }, {
    classMethods: {
      associate: models => Order.hasMany(models.orderItem)
    }
  });
  return Order;
};