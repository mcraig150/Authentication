const mongoose = require('mongoose')

const Users = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true}
})

const User = mongoose.model('User', Users);


module.exports = User;