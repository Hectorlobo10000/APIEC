'use strict';

const ChapterOne = require('../controllers/ChapterOne.Controller');

module.exports = [
    {
        method:'GET',
        path:'/api/chapter/{idChapter}',
        handler: ChapterOne.findOne
    }
];