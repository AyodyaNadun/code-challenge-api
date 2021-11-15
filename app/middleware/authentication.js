const UserModel = require('../model/user-model');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

require('dotenv').config({path:`./config/${process.env.NODE_ENV}.env`});

// local strategy
exports.local = passport.use(new LocalStrategy({ usernameField: 'user_name' }, UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// JWT strategy
exports.generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRE });
};

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

exports.jwtStrategy = passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  if (err)
    return done(err, false);
  else if (user)
    return done(null, user);
  else
    return done(null, false);
}));

// verifying user
exports.verifyUser = passport.authenticate('jwt', { session: false });
