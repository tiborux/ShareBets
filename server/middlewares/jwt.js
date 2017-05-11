var jwt = require('jwt-simple');  
var moment = require('moment');
const config = require('../config/env.json');

exports.createToken = (user) => {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(config.EXP, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

exports.isAuthed = (req, res, next) => {  
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if(payload.exp <= moment().unix()) {
     return res
         .status(401)
        .send({message: "El token ha expirado"});
  }

  req.user = payload.sub;
  next();
}