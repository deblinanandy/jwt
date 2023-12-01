import AdminModel from "../../Model/AdminModel.js";

const getAllUsersController = async (req, res) => {
    try {
        const allUsers = await AdminModel.find({}, { password: 0 }); // Exclude password field from the result

        res.status(200).send({
            success: true,
            users: allUsers,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error in get all users controller",
            success: false,
            err,
        });
    }
};

export default getAllUsersController;
