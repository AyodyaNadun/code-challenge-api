const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passportLocalMongoose = require('passport-local-mongoose');
const Scheme = mongoose.Schema

mongoose.set('useCreateIndex', true);

const userSchema = new Scheme({
    user_id: {
       type: Number,
       required: [true, 'Organization id is required'],
       unique: [true, 'Organization id already exsist']
    },
    url: {
        type: String
    },
    external_id: {
        type: String,
        required: [true, 'External id is required'],
        unique: [true, 'External id already exsist']
    },
    name: {
        type: String,
    },
    alias: {
        type: String,
    },
    created_at: {
        type: String
    },
    active: {
        type: Boolean
    },
    verified: {
        type: Boolean
    },
    shared: {
        type: Boolean
    },
    locale: {
        type: String,
    },
    timezone: {
        type: String
    },
    last_login_at: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    signature: {
        type: String
    },
    organization_id: {
        type: Number,
        required: [true, 'Organization id is required'],
    },
    tags: [{
        type: String
    }],
    suspended: {
        type: Boolean
    },
    role: {
        type: String
    },
    password: {
        type: String,
        minlength: 8
    },
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

 // Encrypt password
 userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

 // Set JWT token
userSchema.methods.generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET,{ expiresIn: process.env.TOKEN_EXPIRE });
}

// Match password
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('users', userSchema);
