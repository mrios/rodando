const { type, file } = require('connect-api-mocker/helpers');
const path = require('path');

const filePath = path.join(__dirname, './GET.pdf');

module.exports = [type('application/pdf'), file(filePath)];
