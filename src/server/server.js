var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
var express  = require("express"),  
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app);

var router = express.Router();
router.get('/', function(req, res) {  
   res.send("Hello World!");
});
app.use(router);

//llamamos al paquete mysql que hemos instalado
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
var connection = new Sequelize('sharebet', 'root', '', {
    host: 'localhost',
});

var User = connection.define('usuarios', {
    usuario: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        },
        unique: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    apellidos: Sequelize.STRING
}
    , {
        createdAt: false,
        updatedAt: false,
        hooks: {
            //Permite guardar el password con su hash en vez de texto plano
            afterValidate: function (user) {
                user.password = bcrypt.hashSync(user.password, 8);
            }
        }
    });

//CONEXION

connection.sync({
    force: true,
    logging: console.log
})
    .then(function () {
        return User.create({
            usuario: 'paco2',
            password: '1232',
            email: 'bel2@gm.com',
            nombre: 'Beñs',
            apellidos: 'god'
        })
    })
    .catch(function (error) {
        console.log(error);
    });

      app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });

  app.get('/users',(req,res)=>{
      User.findAll().then(users => {
        res.json(users);
      });
  });
    //Añade un nuevo usuario
  app.post('/users', (req, res) => {
      const usuario = req.body.usuario;
      const password= req.body.password;
      const email = req.body.email;
      const nombre = req.body.nombre;
      const apellidos = req.body.apellidos;
         User.create({
            usuario: usuario,
            password: password,
            email: email,
            nombre: nombre,
            apellidos: apellidos
        })
      .then(newUser => {
        res.json(newUser);
      })
  });

