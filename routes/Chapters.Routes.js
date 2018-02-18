'use strict';

const ChapterOne = require('../controllers/ChapterOne.Controller');
const ChapterTwo = require('../controllers/ChapterTwo.Controller');

module.exports = [
    {
    	method: 'GET',
    	path: '/api/chapter/2/theme/{idTheme}',
    	handler: ChapterTwo.find
    },
    {
        method: 'GET',
        path: '/api/chapter/1/theme/{idTheme}',
        handler: ChapterOne.find
    }
];