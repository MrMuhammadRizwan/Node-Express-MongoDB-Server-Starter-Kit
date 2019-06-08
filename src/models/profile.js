import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
