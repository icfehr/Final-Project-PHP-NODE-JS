const mongoose = require('mongoose');
const { Editor } = require('../config/roles_list');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number,
        SuperAdmin: Number
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);