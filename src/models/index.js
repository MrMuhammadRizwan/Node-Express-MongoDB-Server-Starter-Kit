import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import Profile from './profile';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Message, Profile };

export { connectDb };

export default models;
