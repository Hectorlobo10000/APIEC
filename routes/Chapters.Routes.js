'use strict';

const ChapterOne = require('../controllers/ChapterOne.Controller');
const ChapterTwo = require('../controllers/ChapterTwo.Controller');

module.exports = [
    {
        method: 'GET',
        path: '/api/chapter/{idChapter}',
        handler: ChapterOne.find
    },
    {
    	method: 'GET' ,
    	path: 'api/chapter/{idChapter}',
    	handler: ChapterTwo.find
    }
];