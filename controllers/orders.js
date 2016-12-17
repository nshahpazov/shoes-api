'use strict';
const models = require('../models');
const orderItem = models.orderItem;
const order = models.order;
const shoeModel = models.shoeModel;

module.exports = {

  /**
   * Create an order record
   */
  createOrder: (req, res, next) => {
    order.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * GET All Orders
   */
  getAllOrders: (req, res, next) => {
    order.findAll()
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * DELETE ALL Orders by first deleting all order items
   */
  deleteAllOrders: (req, res, next) => {
    orderItem.destroy()
      .then(() => order.destroy())
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * Get order by id
   */
  getOrder: (req, res, next) => {
    const id = req.params.id;
    order.findOne({
      where: {id},
      include: [{
        model: orderItem,
        include: [{
          model: shoeModel
        }]
      }]
    })
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * GET All Order Items
   * @param  orderId the id of the order for which the order items to be removed
   */
  getOrderItems: (req, res, next) => {
    const orderId = parseInt(req.params.orderId, 10);
    orderItem.findAll({
      where: {orderId},
      include: [{ model: shoeModel }]
    })
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * NOTE: IS THIS REALLY USED??!?!?!?
   * DELETES ALL order items for a particular Order (Basket)
   * @param  orderId the id of the order for which the order items to be removed
   */
  deleteOrderItems: (req, res, next) => {
    const orderId = parseInt(req.params.orderId, 10);
    orderItem.destroy({where: { orderId }})
      .then(data => res.json(data))
      .catch(next);
  },

  /**
   * DELETE AN Order Item from a particular Order (basket)
   * @param  orderId the id of the order
   * @param  orderItemId the id of the order item
   */
  deleteOrderItem: (req, res, next) => {
    const id = parseInt(req.params.itemId, 10);
    orderItem.destroy({where: { id }})
      .then(() => res.json(id))
      .catch(next);
  },

  /**
   * CREATE AN Order Item for a particular Order (basket)
   * @param  orderId the id of the order
   * nb: if is with the same size, maybe just add it to the pile of that size
   */
  createOrderItem: (req, res, next) => {
    const orderId = parseInt(req.params.orderId, 10);
    orderItem.create(Object.assign({orderId}, req.body))
      .then(data => res.json(data))
      .catch(next);
  }
};
