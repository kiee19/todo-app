import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGDB_CONNECTIONSTRING);

    console.log("Liên kết CSDL thành công!");
  } catch (error) {
    console.error("Lỗi khi kết nối CSDL: ", error);
    process.exit(1); // Exit with the error
  }
};
