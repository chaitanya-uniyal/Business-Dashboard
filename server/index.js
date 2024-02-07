import express from "express";
import helmet, { crossOriginResourcePolicy } from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";


/* configuration */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());




/* MONGOOSE setup */

const PORT = process.env.PORT || 9000;
// var options = {
//     useMongoClient: true,
//     autoIndex: false, // Don't build indexes
//     reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//     reconnectInterval: 500, // Reconnect every 500ms
//     poolSize: 10, // Maintain up to 10 socket connections
//     // If not connected, return errors immediately rather than waiting for reconnect
//     bufferMaxEntries: 0
//   };
// mongoose.connect(process.env.MONGO_URL, options);
var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
  mongoose.connect(process.env.MONGO_URL, options);
  // connection.openUri(process.env.MONGO_URL);
  
  // mongoose.connect(process.env.MONGO_URL)

// .then(()=>{
//     app.listen(PORT ,()=> console.log(`Server Port: ${PORT}`));

//     }).catch((error) => console.log(`${error} did not connect`));
