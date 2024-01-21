const { userService } = require("../services");

const generateOtp = async (req, res) => {
  const { email } = req.body;
  const user = await userService.checkIfExist({
    email,
  });

  if (!user) {
    res.status(400).json({
      success: false,
      data: {
        message: "Email not registered",
      },
    });
  }

  await userService.generateOtp(user.id);
  res.status(200).json({ success: true, data: { message: "OTP generated" } });
};

const login = async (req, res) => {
  const { email, otp } = req.body;
  const user = await userService.checkIfExist({
    email,
  });

  if (!user.id) {
    res.status(400).json({
      success: false,
      data: {
        message: "Email not registered",
      },
    });
  }

  const { success, message } = await userService.login(user.id, otp);
  res.status(200).json({ success, data: { message, user } });
};

module.exports = {
  generateOtp,
  login,
};
