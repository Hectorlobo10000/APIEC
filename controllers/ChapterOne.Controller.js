'use strict';

const Themes = require('../models/ChapterOne.Model');

module.exports = {
    findOne(request, reply){
        Themes.find({}, (err, theme) =>{
            if(err){
                reply(err.message).code(404);
            }
            return reply(theme);
        });
    }
};