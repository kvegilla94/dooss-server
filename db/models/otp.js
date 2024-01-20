"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OTP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OTP.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      otp: {
        type: DataTypes.STRING,
        field: "otp",
      },
    },
    {
      sequelize,
      modelName: "OTP",
    }
  );
  return OTP;
};
