"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      bookedBy: {
        type: DataTypes.INTEGER,
        field: "booked_by",
      },
      appointmentType: {
        type: DataTypes.STRING,
        field: "appointment_type",
      },
      dentistId: {
        type: DataTypes.INTEGER,
        field: "dentist_id",
      },
      date: {
        type: DataTypes.DATE,
        field: "date",
      },
      time: {
        type: DataTypes.STRING,
        field: "time",
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
