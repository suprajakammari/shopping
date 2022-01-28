const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: String,
    password: String
});

module.exports = mongoose.model("User", UserShema);