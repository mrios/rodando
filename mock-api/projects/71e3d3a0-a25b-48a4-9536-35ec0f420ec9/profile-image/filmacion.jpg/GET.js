const { type, file } = require('connect-api-mocker/helpers');
const path = require('path');

const filePath = path.join(__dirname, './GET.jpg');

module.exports = [type('image/jpg'), file(filePath)];
