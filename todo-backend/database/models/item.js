"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING(1000)
      },
      severity: {
        type: DataTypes.ENUM("low", "medium", "high", "critical")
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dueDate: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "Item"
    }
  );
  return Item;
};
