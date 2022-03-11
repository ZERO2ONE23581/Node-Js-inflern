const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { User } = require("./models/User"); //모델소환

//mongoose mongoDB 연결
mongoose
  .connect(
    "mongodb+srv://aiden_kim:abcd1234@zero2one.unbjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(`MongoDB Connected!`)) //연결시 콘솔
  .catch((error) => console.log(error)); //에러콘솔

app.post("/register", (req, res) => {
  //회원가입할때 필요한 정보들을 client(브라우저)에서 가져오면 =>
  //그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body); //client data in the User model form!

  user.save((errMsg, userInfo) => {
    //POSTMAN에서 req날리면 데이터 받아와서 저장.
    //save는 mongoDB api
    if (errMsg) {
      return res.json({ sucess: false, errMsg });
    } else {
      return res.status(200).json({ sucess: true });
    }
  });
});

app.get("/", (req, res) => res.send("HELLO WORLD"));
const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
