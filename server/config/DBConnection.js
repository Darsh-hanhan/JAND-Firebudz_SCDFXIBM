const mySQLDB = require('./DBConfig');
const user = require('../models/User');
const video = require('../models/Video');
const faq = require('../models/Faq');

// If drop is true, all existing tables are dropped and recreated
const setUpDB = (drop) => {
    mySQLDB.authenticate()
        .then(() => {
            console.log('firebudz database connected');
    })
    .then(() => {
        user.hasMany(video);
        user.hasMany(faq);
        mySQLDB.sync({ // Creates table if none exists
            force: drop
        })
        .then(() => {
            console.log('Create tables if none exists')
        }).catch(err => console.log(err))
    })
    .catch(err => console.log('Error: ' + err));
};

module.exports = { setUpDB };
