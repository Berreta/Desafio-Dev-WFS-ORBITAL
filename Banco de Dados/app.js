const express = require('express')
const { PrismaClient } = require('@prisma/client')

const PORT =  3000;
const app = express()
const prisma = new PrismaClient()

app.use(express.json());

const users = []


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


app.listen(PORT, () => {
    console.log('Listening')
});