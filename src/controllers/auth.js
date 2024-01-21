const userService = require("../services/user");

const generateOtp = async (req, res) => {
  const { email } = req.body;
  const userId = await userService.checkIfExist({
    email,
  });

  if (!userId) {
    res.status(400).json({
      success: false,
      data: {
        message: "Email not registered",
      },
    });
  }

  await userService.generateOtp(userId);
  res.status(200).json({ success: true, data: { message: "OTP generated" } });
};

const login = async (req, res) => {
  const { email, otp } = req.body;
  const userId = await userService.checkIfExist({
    email,
  });

  if (!userId) {
    res.status(400).json({
      success: false,
      data: {
        message: "Email not registered",
      },
    });
  }

  const { success, message } = await userService.login(userId, otp);
  res.status(success ? 200 : 400).json({ success, data: { message } });
};

module.exports = {
  generateOtp,
  login,
};
