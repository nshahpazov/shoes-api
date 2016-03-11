'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderItem = sequelize.define('orderItem', {
    size: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: models => orderItem.belongsTo(models.shoeModel)
    }
  });

  return orderItem;
};