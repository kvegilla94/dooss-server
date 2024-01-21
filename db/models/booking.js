"use strict";
const { Model } = require("sequelize");
const { Dentist } = require("../models");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.hasOne(models.Dentist, {
        as: "dentist",
        foreignKey: "id",
        sourceKey: "dentistId",
      });
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
      status: {
        type: DataTypes.STRING,
        field: "status",
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
