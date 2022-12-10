/**
 * config setting 분리
 */
const path = require("path");
const dotenv = require("dotenv");

const configSetting = () => {
  console.log("mode :", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: path.join(__dirname, ".env") });
  } else if (process.env.NODE_ENV === "develop") {
    dotenv.config({ path: path.join(__dirname, ".env.dev") });
  } else if (process.env.NODE_ENV === "test") {
    dotenv.config({ path: path.join(__dirname, ".env.test") });
  } else {
    throw new Error("process.env.NODE_ENV를 설정하지 않았습니다!");
  }
};

module.exports = configSetting;
