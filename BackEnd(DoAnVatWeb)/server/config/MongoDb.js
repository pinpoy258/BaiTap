import mongoose from "mongoose";


var MONGO_URL1="mongodb+srv://admin:admin123456@doanvatt.bqmv1.mongodb.net/DoAnVattDatabase?retryWrites=true&w=majority"
const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL1, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
