const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });

    const token = user.tokenise();

    res.status(201).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "User created",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        error: true,
        message: "Failed to authenticate",
      });
    }

    const passCheck = await user.checkPassword(password);
    if (!passCheck) {
      return res.status(400).json({
        error: true,
        message: "Failed to authenticate",
      });
    }

    const token = user.tokenise();
    res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in successfully",
      user,
    });
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
