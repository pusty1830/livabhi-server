const User = require("../service/user.service");
const httpResponseCodes = require("../utils/http");
const { prepareResponse } = require("../utils/response");
const {
  USER_ALREADY_EXISTS,
  SERVER_ERROR_MESSAGE,
} = require("../utils/messages");

const checkMail = (req, res, next) => {
  const { email } = req.body;
  User.getOneUserByCond({ email })
    .then((data) => {
      if (data) {
        return res
          .status(httpResponseCodes.BAD_REQUEST)
          .json(
            prepareResponse("BAD_REQUEST", USER_ALREADY_EXISTS, data, null)
          );
      }
      next();
    })
    .catch((error) => {
      return res
        .status(httpResponseCodes.SERVER_ERROR)
        .json(
          prepareResponse("SERVER_ERROR", SERVER_ERROR_MESSAGE, null, error)
        );
    });
};

module.exports = checkMail;
