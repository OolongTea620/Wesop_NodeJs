require("dotenv").config();

const mongoConnect = require("./src/connections/mongodb");

const { createApp } = require("./app");
const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
