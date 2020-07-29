const dotenv = require("dotenv")
dotenv.config()
const mongodb = require("mongodb")

mongodb.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) {
    console.log(err)
  }
  module.exports = client
  const app = require("./app")
  app.listen(process.env.PORT, () => {
    console.log("DB connection success! Server on port 4000")
  })
})
