const configSetting = require("./configs");
const mongoConnect = require("./src/connections/mongodb");
const { createApp } = require("./app");
configSetting();

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
