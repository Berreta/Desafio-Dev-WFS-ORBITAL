const express = require('express')
const { PrismaClient } = require('@prisma/client')

const PORT =  3000;
const app = express()
const prisma = new PrismaClient()

app.use(express.json());

//rota para adicionar usuários
app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.name,
            name: req.body.name,
            msg: req.body.msg
        }
    })
    res.status(201).json(req.body)
})


//rota para retornar todos os usuários
//findmany busca dentro de user todo os usuários
app.get('/users', async (req, res) => {

    //findmany busca dentro de user todo os usuários
    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

//rota para editar usuários
//usuário será deletado usando ID
app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.name,
            name: req.body.name,
            msg: req.body.msg
        }
    })

    res.status(201).json(req.body)
})

//rota para excluir usuário
//Usuário será deletado usando ID
app.delete('/users/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: 'Usuário deletado!'})
})

app.listen(PORT, () => {
    console.log('Listening')
});