const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { User } = require("./models/User"); //모델소환
const config = require("./config/key"); //key

//mongoose mongoDB 연결
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Connected!`))
  .catch((error) => console.log(error));

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) {
      return res.json({ sucess: false, err });
    } else {
      return res.status(200).json({ sucess: true });
    }
  });
});

app.get("/", (req, res) => res.send("HELLO WORLD"));
const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
