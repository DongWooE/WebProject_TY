const { basename } = require('path');

module.exports = filepath => {
    const fileName = basename(filepath);
    return fileName
        .replace(/\.schema\.js/, '')
        .replace(/-/g, '');
};

