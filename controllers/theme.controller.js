'use strict';

const Theme = require('../models/theme.model');

module.exports = {
    findOne(request, reply){
        Theme.find({}, (err, theme) =>{
            if(err){
                reply(err.message).code(404);
            }
            return reply(theme);
        });
    }
};