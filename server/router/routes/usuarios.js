 'use strict';

module.exports = (app, db) => {
 
 //Conseguimos todos los usuarios   
app.get('/users', (req, res) => {
    db.usuarios.findAll().then(users => {
        res.json(users);
    });
});
//Añade un nuevo usuario
app.post('/newuser', (req, res) => {
    db.usuarios.create({
        usuario: req.body.usuario,
        password: req.body.password,
        email: req.body.email,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos
    })
        .then(newUser => {
            res.json(newUser);
        })
});
};