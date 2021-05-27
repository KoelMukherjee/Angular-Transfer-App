const express = require('express');
const transfers = require('./transfers.json');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.get('/transfers', (req, res) => {
    res.send(transfers)
});
app.get('/transfers/:id', (req, res) => {
const transfer = transfers.find(transfer => transfer.ID === req.params.id);
    if(!transfer) {
        res.send('Transfer with given ID does not exist');
    }
    res.send(transfer);
})

app.delete('/transfers/:id', (req, res) => {
    let transferArray = [];
    let deleteTransfer = {};
    transfers.forEach(transfer => {
        if(transfer.ID === req.params.id) {
            deleteTransfer = transfer
        }
        else  {
            transferArray.push(transfer);
        }
    });
    if(!deleteTransfer) {
        res.send('Transfer with given ID does not exist');
    }
    res.send(transferArray);
});
app.put('/transfers/:id', (req, res) => {
    transfers.forEach(transfer => {
        if(transfer.ID === req.params.id) {
            transfer.account_holder = req.body.account_holder;
            transfer.amount = req.body.amount;
            transfer.date = req.body.date;
            transfer.iban = req.body.iban;
            transfer.note = req.body.note;
        }
    });
    res.send(transfers);
});

app.listen(3000, () => console.log('Listning to port 3000....'));