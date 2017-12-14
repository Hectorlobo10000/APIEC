'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThemeSchema = new Schema({
    id: Schema.Types.ObjectId,
    chapter: Number,
    themeId: Number,
    theme: String,
    paragraphs: Schema.Types.Array
},{
    collection: 'Chapter_1'
});

module.exports = mongoose.model('Theme', ThemeSchema);