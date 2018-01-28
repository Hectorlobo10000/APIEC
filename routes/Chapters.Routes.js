'use strict';

const ChapterOne = require('../controllers/ChapterOne.Controller');
const ChapterTwo = require('../controllers/ChapterTwo.Controller');

module.exports = [
    {
        method: 'GET',
        path: '/api/chapter/1',
        handler: ChapterOne.find
    },
    {
    	method: 'GET' ,
    	path: 'api/chapter/2',
    	handler: ChapterTwo.find
    }
];