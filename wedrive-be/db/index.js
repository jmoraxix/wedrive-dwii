const mongoose = require('mongoose')

mongoose.
    connect('mongodb+srv://wedrivedba:dqOod4pPBv1IDBbQ@wedrive-cl1.2za97up.mongodb.net/wedrive?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db