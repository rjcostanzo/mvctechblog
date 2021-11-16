const { User } = require('../models');

const userData = [{
        username: 'rjcostanzo',
        password: 'riosqlpwd'

    },
    {
        username: 'bryce',
        password: 'asdf'
    },
    {
        username: 'justin',
        password: 'asdf'
    },
    {
        username: 'dylan',
        password: 'asdf'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;