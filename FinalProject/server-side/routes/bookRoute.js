import express from 'express'
import Book from '../models/Book.js'
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.json()) // Middleware para receber dados em formato json

// Cadastro de livros (HTTP - POST)

router.post('/api/addBook', (req, res) => {
    console.log(req.body)
    let book = new Book(
        req.body
        // title: req.body.title,
        // author: req.body.author,
        // edition: req.body.edition,
        // publisher: req.body.publisher,
        // description: req.body.description,
        // img: req.body.img,
        // price: req.body.price,
        // inv_qtd: req.body.inv_qtd,
        // sold_qtd: req.body.sold_qtd
    )

    book.save()
    .then(doc => {
        console.log("Livro cadastrado com sucesso!!")
    })
    .catch(err => {console.log(err)});

    res.send("Cadastro efetuado com sucesso!!")
})



// Consulta livros (HTTP - GET)

router.get('/api/getBook/', (req, res) => { // Pega todos os livros do banco

    Book.find({})
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})
router.get('/api/getBook/:title', (req, res) => { // Pega livro baseado no nome
    let title = req.params.title;

    Book.find({title})
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})

// Deleção de livros (HTTP - DELETE)
router.delete('/api/deleteBook/:title', (req, res) => {
    let title = req.params.title;
    Book.findOneAndRemove({title})
    .then(doc =>{
        console.log("OK!!")
        res.send("Ok!!")
    }
    )
    .catch(err => {
        res.send(err);
    })
})

// Atualização de livros (HTTP - PUT)

router.put('/api/attBook/:title', (req, res) =>{
    let title = req.params.title;
    Book.findOneAndUpdate({title}, req.body)
    .then(doc => {
        console.log(doc)
        res.send("OK!!");
    })
    .catch(err =>{
        res.send(err);
    })

})


export default router;

