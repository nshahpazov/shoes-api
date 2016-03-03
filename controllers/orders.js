'use strict';
const models = require('../models');

module.exports = {
  createOrder: (req, res, next) => {
    models.Order.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  },

  getAllOrders: (req, res, next) => {
    models.Order.findAll()
      .then(data => res.json(data))
      .catch(next);
  },

  deleteAllOrders: (req, res, next) => {
    // TODO: find how to make this work
    // models.Order.destroy()
    //   .then(data => res.json(data))
    //   .catch(next);
  },

  getOrder: (req, res, next) => {

  },

  getOrderItems: (req, res, next) => {
    // note: something wrong with destructing in nodeJS
    const OrderId = parseInt(req.params.orderId, 10);
    models.OrderItem.findAll({where: {OrderId}})
      .then(data => res.json(data))
      .catch(next);
  },

  deleteOrderItem: (req, res, next) => {
    const id = req.params.itemId;
    models.OrderItem.destroy({where: { id }})
      .then(data => res.json(data))
      .catch(next);
  },

  // if is with the same size, maybe just add it to the pile of that size
  createOrderItem: (req, res, next) => {
    const OrderId = parseInt(req.params.orderId, 10);
    console.log(Object.assign({OrderId}, req.body));
    models.OrderItem.create(Object.assign({OrderId}, req.body))
      .then(data => res.json(data))
      .catch(next);
  }
};