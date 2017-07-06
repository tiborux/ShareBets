class BetsController {
  constructor(service, mapper, middlewares) {
    this.service = service;
    this.mapper = mapper;
    this.middlewares = middlewares;
  }

  getAll(req, res) {
    return this.service.getAll()
      .then(this.mapper.outputAll.bind(this.mapper))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  getBet(req, res) {
    return this.service.getByBetId(req.params.id)
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  getMe(req, res) {
    return this.service.getByUserId(req.user)
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  getHistory(req, res) {
    return this.service.getByUserId(req.user)
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  getUsers(req, res) {
    return this.service.getUsersBets(req.params.betId)
      .then(this.mapper.outputGetUsersBets.bind(this.mapper))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  createBet(req, res) {
    return this.service.create(this.mapper.inputUpdate(req.body), req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  updatePay(req, res) {
    return this.service.updatePago(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  updateStatus(req, res) {
    return this.service.updateStatus(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  endBet(req, res) {
    return this.service.endBet(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  updateBet(req, res) {
    return this.service.updateBet(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  delete(req, res) {
    return this.service.delete(req.params.user_id)
      .then(this.mapper.outputDelete.bind(this.mapper, req.params.username))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  payout(req, res) {
    var paypal = require('paypal-rest-sdk');

 paypal.configure({
        'mode':"sandbox", //sandbox or live
        'client_id': "AfARhzdR_-sKaDCj1-XWuVcywbP4iWyX0s9coK6EfAhZZogTRScgXnEFzA8_CL1YnuzHCQh7UNtHv95l",
        'client_secret': "ECpmTbEdzbctRYTrqOUxf6c174NA0H7i40lpk7e4m60ZTy3jX6HG930AzfKMJ-dImyw4gJllUpe1ZpgX"
      });
    var sender_batch_id = Math.random().toString(36).substring(9);

    var create_payout_json = {
      "sender_batch_header": {
        "sender_batch_id": sender_batch_id,
        "email_subject": "You have a payment"
      },
      "items": [
        {
          "recipient_type": "EMAIL",
          "amount": {
            "value": 100,
            "currency": "EUR"
          },
          "receiver": "t1borux-buyer@hotmail.com",
          "note": "Thank you.",
          "sender_item_id": "item_1"
        }
      ]
    };
var sync_mode = 'true';
     paypal.payout.create(create_payout_json, sync_mode, function (error, payout) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log("Create Single Payout Response");
          console.log(payout);
          var payoutId = payout.batch_header.payout_batch_id;
          paypal.payout.get(payoutId, function (error, payout) {
              if (error) {
                  console.log(error);
                  throw error;
              } else {
                  console.log("Get Payout Response");
                  console.log(JSON.stringify(payout));
              }
          });
      }
  }); 
  }
}

module.exports = (service, mapper, middlewares) => new BetsController(service, mapper, middlewares);
