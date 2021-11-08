const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { Module } = require('webpack');
module.exports = {
    plugins: [
        autoprefixer,
        cssnano({ preset: 'default' })
    ]
};