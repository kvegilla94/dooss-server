const { dentistService } = require("../services");

const getAll = async (req, res) => {
  const dentists = await dentistService.getAll();
  res.status(200).json({ success: true, data: dentists });
};

module.exports = {
  getAll,
};
