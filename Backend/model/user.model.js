import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
//"mongodb+srv://vermabhoomi10248932:silver1671@cluster0.tshfda6.mongodb.net/bookStore"