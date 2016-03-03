'use strict';
const models = require('../models');

module.exports = {

  /**
   * Create an order record
   */
  createOrder: (req, res, next) => {
    models.Order.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * GET All Orders
   */
  getAllOrders: (req, res, next) => {
    models.Order.findAll()
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * DELETE ALL Orders by first deleting all order items
   */
  deleteAllOrders: (req, res, next) => {
    models.OrderItem.destroy()
      .then(_ => models.Order.destroy())
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * Get order by id
   */
  getOrder: (req, res, next) => {
    const id = req.params.id;
    models.Order.findOne({where: {id}})
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * GET All Order Items
   * @param  orderId the id of the order for which the order items to be removed
   */
  getOrderItems: (req, res, next) => {
    const OrderId = parseInt(req.params.orderId, 10);
    models.OrderItem.findAll({where: {OrderId}})
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * DELETES ALL order items for a particular Order (Basket)
   * @param  orderId the id of the order for which the order items to be removed
   */
  deleteOrderItems: (req, res, next) => {
    const OrderId = parseInt(req.params.orderId, 10);
    models.OrderItem.destroy({where: { OrderId }})
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * DELETE AN Order Item from a particular Order (basket)
   * @param  orderId the id of the order
   * @param  orderItemId the id of the order item
   */
  deleteOrderItem: (req, res, next) => {
    const id = req.params.itemId;
    models.OrderItem.destroy({where: { id }})
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * DELETE AN Order Item from a particular Order (basket)
   * @param  orderId the id of the order
   * nb: if is with the same size, maybe just add it to the pile of that size
   */
  createOrderItem: (req, res, next) => {
    const OrderId = parseInt(req.params.orderId, 10);
    models.OrderItem.create(Object.assign({OrderId}, req.body))
      .then(data => res.json(data))
      .catch(next);
  }
};