const express = require('express')

const { getCustomersCol, addCustomer, updateCustomer, getCustomer } = require('./customers-col')

const app = express()
app.use(express.json())

app.get('/customers', (req, res) => {
    getCustomersCol()
    .then(customers => res.send(customers))
})

app.post('/customers', (req, res) => {
    addCustomer(req.body)
    .then(() => res.send("Successfully added user!").status(200))
})

app.get('/customers/:customerId', (req, res) => {
    getCustomer(req.params.customerId)
    .then(customer => res.send(customer))
})

app.patch('/customers/:customerId', (req, res) => {
    updateCustomer(req.params.customerId, req.body)
    .then(() => res.send("Successfully updated user!").status(200))
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})