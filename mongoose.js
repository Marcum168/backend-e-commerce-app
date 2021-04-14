//helps not to load database each time
// making a cached connection

import mongoose from "mongoose";
let isConnected = false;
const uri =
  "mongodb+srv://Kapstone:Kapstone@kapstone.94z2q.mongodb.net/Kapstone-Q2?retryWrites=true&w=majority";
export default async function connectionTest() {
  try {
    if (isConnected) {
      return;
    }
    await mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("MongoDB Connected..."))
      .catch((err) => console.log(err));
    console.log("IT's CONNECTED");
    isConnected = true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
//tri-catch.
