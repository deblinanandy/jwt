import AdminModel from "../../Model/AdminModel.js";
import bcrypt from "bcrypt"; // Import bcrypt instead of bcryptjs

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;  // destructuring

        // duplicate emailid checking
        const existingUser = await AdminModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "Email is already there",
            });
        }

        // password encryption    
        const saltRounds = 10; // You can adjust the number of salt rounds as needed
        const hashPassword = await bcrypt.hash(password, saltRounds);   // asynchronous hashing

        const userData = {
            name: name,
            email: email,
            password: hashPassword,
        };

        console.log(userData);
        await AdminModel.create(userData);
        res.status(200).send({
            success: true,
            message: "User account created successfully",
        });
    } catch (err) {
        res.status(400).send({
            message: "Error in register controller",
            success: false,
            err,
        });
    }
};

export default registerController;
