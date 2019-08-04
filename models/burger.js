const ORM = require("../config/orm");





module.exports = burger = {
  selectAll: function (cb) {
    ORM.selectAll("burgers", res => {
      cb(res)
    })
  },

  insertOne: function (column, value, cb) {
    ORM.insertOne("burgers", column, value, res => {
      cb(res);
    });
  },

  updateOne: function (newValue, condition, cb) {
    ORM.updateOne("burgers", newValue, condition, res => {
      cb(res);
    })
  },

  deleteOne: function (deleteCondition, cb) {
    ORM.deleteOne("burgers", deleteCondition, res => {
      cb(res);
    })
  }
}