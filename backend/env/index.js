require('dotenv').config();

const env = {
    IS_DEV: true,
    ...process.env
};

module.exports = env;