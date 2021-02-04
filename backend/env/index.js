require('dotenv').config();

const env = {
    IS_DEV: process.env.NODE_ENV === 'development',
    ...process.env
};

module.exports = env;