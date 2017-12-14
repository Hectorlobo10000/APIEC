const Theme = require('../models/theme.model');

module.exports = {
    findOne(request, reply){
        Theme.findOne({'theme_id': Number(request.params.idTheme)}, (err, theme) =>{
            if(err){
                reply(err.message).code(404);
            }
            return reply(theme);
        });
    }
};