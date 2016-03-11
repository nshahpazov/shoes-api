const models = require('../models');
const ShoeModel = models.shoeModel;

module.exports = {

  getAllShoeModels: (req, res, next) => {
    ShoeModel.findAll()
      .then(data => res.json(data))
      .catch(next);
  },

  getShoeModel: (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    ShoeModel.findOne({where: {id}})
      .then(data => res.json(data))
      .catch(next);
  },
  createShoeModel: (req, res, next) => {
    ShoeModel.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  },

  updateShoeModel: (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    ShoeModel.update(req.body, {where: {id}})
      .then(data => res.json(data))
      .catch(next);
  }




};