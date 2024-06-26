const { ca } = require('date-fns/locale');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new mongoose.Schema({
    stateCode: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    admission_date: {
        type: String,
        required: true
    },
    admission_number: {
        type: Number,
        required: true
    },
    capital_city: {
        type: String,
        required: true
    },
    capital_url: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    population_rank: {
        type: Number,
        required: true
    },
    constitution_URL: {
        type: String,
        required: true
    },
    state_flag_url: {
        type: String,
        required: true
    },
    state_seal_url: {
        type: String,
        required: true
    },
    map_image_url:{
        type: String,
        required: true
    },
    landscape_background_url : {
        type: String,
        required: true
    },
    skyline_background_url: {
        type: String,
        required: true
    },
    twitter_url: {
        type: String,
        required: false
    },
    facebook_url: {
        type: String,
        required: false
    },
    funfacts: {
        type: [String],
        required: false
    },
});

module.exports = mongoose.model('State', stateSchema);