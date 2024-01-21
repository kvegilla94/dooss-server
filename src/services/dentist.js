const { Dentist } = require("../../db/models");

const getAll = async () => {
  const dentists = await Dentist.findAll();
  return dentists;
};

module.exports = {
  getAll,
};
