import mongoose from "mongoose";

const connectToMongoDb = async () => {
  console.log(process.env.MONGO_DB_URI);
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb", error.message);
  }
};

export default connectToMongoDb;
