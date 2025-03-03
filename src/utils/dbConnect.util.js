import { connect } from "mongoose";

async function dbConnect() {
  try {
    await connect(
      "mongodb+srv://gaspoxlt:homero123@backend3.j3lr9.mongodb.net/coder-70210"
    );
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
