'use strict';

const ThemeController = require('../controllers/theme.controller');
module.exports = [
    {
        method:'GET',
        path:'/api/chapter/{idChapter}',
        handler: ThemeController.findOne
    }
];