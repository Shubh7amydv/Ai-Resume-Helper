import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectToDB from "./src/config/database.js";


const PORT = process.env.PORT;

console.log(process.env.GOOGLE_API_KEY);
console.log("KEY:", process.env.GOOGLE_API_KEY);
connectToDB();



app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});