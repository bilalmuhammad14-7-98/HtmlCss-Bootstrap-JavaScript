import mongoose from "mongoose";

const { Schema } = mongoose;

const adsSchema = new Schema({
  title: {
    required: true,
    type: String,
    minlength: 2,
  },

  amount: {
    required: true,
    type: Number,
  },
  description: String,
});

const Ads = mongoose.model("ads", adsSchema);

export default Ads;
