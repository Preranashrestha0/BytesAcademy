const bcrypt = require("bcryptjs");      // Import bcrypt for password comparison
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// // Register user
// exports.registerUser = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const userExists = await User.findOne({ username });
//     if (userExists) {
//       return res.status(400).json({ message: "Username already exists" });
//     }
//     const newUser = await User.create({ username, password });
//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// Login user
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find user by username
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(400).json({ msg: "Invalid username or password" });
      }
  
      // Compare entered password with hashed password
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid username or password" });
      }
  
      // Generate JWT token
      const payload = {
        user: {
          id: user._id,
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
  
          res.status(200).json({
            msg: "User logged in successfully",
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              username: user.username,
            },
          });
        }
      );
    } catch (err) {
      console.error("Login Error:", err.message);
      res.status(500).json({ msg: "Server error" });
    }
  };

exports.addUser = async (req, res) => {
  try {
    const { username, password} = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
}
}