var crypto = require('crypto');
var async = require('async');
const nodemailer = require('nodemailer');

class LoginController {

  constructor(service, mapper, middlewares) {
    this.service = service;
    this.mapper = mapper;
    this.middlewares = middlewares;
  }

  login(req, res) {
    return this.service.getByUserPassword(this.mapper.inputUser(req.body))
      .then((usuario) => {
        if (usuario) {
          return usuario;
        }
        else {
          
          return res.status(400).json({ error: true });
        }
      })
      .then(this.middlewares.jwt.createToken.bind(this.middlewares.jwt))
      .then(this.mapper.outputToken.bind(this.mapper))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  logout(req, res) {
    return res.json(this.mapper.outputLogout());
  }

  reset(req, res) {
    this.service.getByEmail(req.body.email)
      .then(this.mapper.outputEmail.bind(this.mapper))
      .then(res.send.bind(res)).then(res => {
        var token = crypto.randomBytes(20).toString('hex');
        var expires = Date.now() + 8000000;
        this.service.resetPassword(req.body.email, token, expires);
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: 'sharebets.reset@gmail.com',
            clientId: '968024990515-oo6p8mjr9v8ukrbn3ql6u428afq8kqi7.apps.googleusercontent.com',
            clientSecret: '6R1r6X67g7TWLo-YGttRA8La',
            refreshToken: '1/E-AUHT7azoRfaDSqH9VMAux-qYQB8968kdzDYvjy8Pw',
            accessToken: 'ya29.GlxhBNLNL_43nJVJqWwFGdb_n6ty5rVw0P-6QZZwyx-K-exxXshEWVzLQ6lpJoWZDZf49yNZHrtRq2Z5AKvhvSOhhW0mJqGi3snBM-oy6tmfGAAtbDCq2Ts42xRyPg'
          }
        });
        var mailOptions = {
          from: 'Sharebet recuperación de contraseña <sharebets.reset@gmail.com>',
          to: req.body.email,
          subject: 'Sharebet: Reinicio de contraseña',
          text: 'Has recibido este correo por que tu (o alguien) ha solicitado una contraseña nueva.\n\n' +
          'Por favor, pulsa en el siguiente link, o pegalo en tu navegador para completar el proceso:\n\n' +
          'http://localhost:4200/app/forgot?token=' + token + '\n\n' +
          'Si no has solicitado el reinicio de tu contraseña, por favor ignora este correo y tu contraseña no será cambiada.\n'
        };

        transporter.sendMail(mailOptions, function (err, res) {
          if (err) {
            console.log(err);
          } else {
            console.log('Email Sent');
          }
        });
      }
      ).catch(res.send.bind(res));
  }
  getToken(req, res) {
    this.service.getByToken(req.params.token).then(usuario => {
      if (!usuario) {
        return res.status(400).json({ error: true });
      }
      else {
        return res.status(200).json({ valid: true });
      }
    });
  }

  updatePassword(req, res) {
    return this.service.updatePassword(req.params.token, req.body.password)
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

}

module.exports = (service, mapper, middlewares) => new LoginController(service, mapper, middlewares);
