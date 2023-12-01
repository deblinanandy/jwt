import AdminModel from "../../Model/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = "m"
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body; // Destructuring

        // Find the user with the provided email
        const user = await AdminModel.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({_id: user._id }, JWT_SECRET_KEY, {
                expiresIn: "1h", // Set a reasonable expiration time
            });

           
         

            res.status(200).send({
                success: true,
                message: "Login successful",
                token: token, // Include the token in the response
            });
        } else {
            res.status(401).send({
                success: false,
                message: "Incorrect password",
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error in login controller",
            success: false,
            err,
        });
    }
};

export default loginController;
