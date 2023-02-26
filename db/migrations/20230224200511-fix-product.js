'use strict';
const { DataTypes } = require('sequelize');

const { PRODUCT_TABLE } = require('./../models/products.model')

module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'category_id',{
      field: 'category',
      allowNull: false,
      type: DataTypes.INTEGER,
    });
  },

  async down(queryInterface) {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};

