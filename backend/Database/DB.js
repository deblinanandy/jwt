import mongoose from "mongoose";
const Database = async () => {
    try {
        await mongoose.connect("mongodb+srv://test:test@cluster0.bqb3hr6.mongodb.net/?retryWrites=true&w=majority");
        console.log("connection established")
    }
    catch (error) {
        console.log("error")
    }
}
export default Database