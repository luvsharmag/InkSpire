import { configDotenv } from "dotenv";
configDotenv({path:'./.env'});
import mongoose from "mongoose";
const connect = async () => {
  try{    
    await mongoose.connect(process.env.CONNECTION_STRING);
  }catch(err){
    throw new Error("Connection failed!");
  }
};
export default connect;
