const express = require("express");
const app = express();
const PORT = 4000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://aiden_kim:abcd1234@zero2one.unbjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log(`MongoDB Connected!`))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
