//로컬에서 비밀정보관리하면 production실행, 외부환경(heroku)에서 관리하면 development로 실행
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
