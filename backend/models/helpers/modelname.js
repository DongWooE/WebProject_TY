const { basename } = require('path');
// const { post } = require('../schemas/post.schema');

module.exports = filepath => {
    const fileName = basename(filepath);
    return fileName
        .replace(/\.schema\.js/, '')
        .split('-')
        .map(chunk => chunk[0].toUpperCase() + chunk.substr(1))
        .join('');
};
