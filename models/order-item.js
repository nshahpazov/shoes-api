'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    size: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: models => OrderItem.belongsTo(models.ShoeModel)
    }
  });

  return OrderItem;
};