require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.connect(
    process.env.MONGO_CONNECT_URL,
    {
      dbName: process.env.MONGO_DB_NAME,
      auth: {
        authSource: "admin",
      },
      user: process.env.MONGO_USERNAME,
      pass: process.env.MONGO_PASSWORD,
      connectTimeoutMS: 10000,
    },
    (error) => {
      if (error) {
        console.log("Fail connect MongoDB", error);
      } else {
        console.log("Success connect MongoDB");
        console.log("dbName", process.env.MONGO_DB_NAME);
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("mongoDB connect error");
  console.log(error);
});

mongoose.connection.on("disconnected", () => {
  console.error("try connect mongoDB again ...");
  mongoConnect();
});

module.exports = mongoConnect;
