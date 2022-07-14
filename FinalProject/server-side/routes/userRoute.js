import express from 'express'
import User from '../models/User.js'
import bodyParser from 'body-parser';

const router = express.Router();


router.use(bodyParser.json()) // Middleware para receber dados em formato json

// Cadastro de usuários (HTTP POST)

router.post('/api/addUser', (req, res) => {
    let user = new User (
        req.body
        
        // userName: req.body.userName,
        // name: req.body.name,
        // password: req.body.password,
        // tel: req.body.tel,
        // email: req.body.email,
        // addr: req.body.addr,
        // admin: req.body.admin
    )

    user.save()
    .then(doc => {
        console.log("Usuario cadastrado com sucesso!!")
    })
    .catch(err => {
        console.log(err);
    })

    res.send("Cadastro efetuado com sucesso!!")
})

// Consulta usários (HTTP GET)

router.get('/api/getUser/', (req, res) => { // Pega todos os usuários do banco
    
    User.find({})
    .then(doc => { //OBS: doc é um array de objetos e pode devolver vários documentos com mesmo nome
        res.send(doc);
    })
    .catch(err => {
        res.send(err);
    })
})
router.get('/api/getUser/:name', (req, res) => { // Pega usuario baseado no nome
    let name = req.params.name;
    
    User.find({name:name})
    .then(doc => { //OBS: doc é um array de objetos e pode devolver vários documentos com mesmo nome
        res.send(doc);
    })
    .catch(err => {
        res.send(err);
    })
})

router.post('/api/login', (req, res) => { // Pega usuario baseado no nome
    let userName = req.body.userName;
    let password = req.body.password;
    
    User.find({userName:userName, password: password})
    .then(doc => { //OBS: doc é um array de objetos e pode devolver vários documentos com mesmo nome
        console.log(req.body)
        res.send(doc);
    })
    .catch(err => {
        res.send(err);
    })
})


// Deleção de usuário (HTTP DELETE)

router.delete('/api/deleteUser/:name', (req, res) => {
    let name = req.params.name;
    User.findOneAndRemove({name})
    .then(doc => {
        res.send("OK!!");
    })
    .catch(err => {
        res.send(err);
    })
})

// Atualização de usuário (HTTP PUT)

router.put('/api/attUser/:name', (req, res) =>{
    let name = req.params.name;
    User.findOneAndUpdate({name}, req.body)
    .then(doc => {
        res.send("OK!!")
    })
    .catch(err => {
        res.send(err)
    })
})

export default router;