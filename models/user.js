const mongoose = require('mongoose');
const uuidv1 = require('uuid');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true
    },

    hashed_password: {
        type: String,
        required: true
    },

    salt: String,

    created: {
        type: Date,
        default: Date.now
    },

    updated: Date

});

userSchema.virtual('password')
.set(password => {
    this._password = password;
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password);
})
.get(() => this.password);

userSchema.methods = {
    encryptPassword: function(password) {
        if(!password) return "";

        try {
            return crypto.createHmac("sha1", this.salt)
                         .update(password)
                         .digest("hex");
        } catch (error) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema);