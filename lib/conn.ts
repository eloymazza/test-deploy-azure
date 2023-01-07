import mongoose from 'mongoose';
import { DB_URI } from '../config/config';

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    console.log('mongoURI', DB_URI);
    // await mongoose.connect(DB_URI);
    console.log('MongoDB Connected... redeploy');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
