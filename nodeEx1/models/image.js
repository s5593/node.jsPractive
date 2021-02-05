var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * result결과를 또 다른 객체로 받기 위한 스키마
 * 8가지 감정의 수치를 정수로 받음
 */
const resultSchema = new Schema({
    emo1: {
        type: Number,
        unique: false,
        required: true,
    },
    emo2: {
        type: Number,
        unique: false,
        required: true,
    },
    emo3: {
        type: Number,
        unique: false,
        required: true,
    },
    emo4: {
        type: Number,
        unique: false,
        required: true,
    },
    emo5: {
        type: Number,
        unique: false,
        required: true,
    },
    emo6: {
        type: Number,
        unique: false,
        required: true,
    },
    emo7: {
        type: Number,
        unique: false,
        required: true,
    },
    emo8: {
        type: Number,
        unique: false,
        required: true,
    },
});

/**
 * 사용할 데이터베이스의 스키마     
 * name: date,
 * email: string,
 * path: string,
 * type: string,
 * result: resultscema(직접 만듬)
 */
const imageSchema = new Schema({
    name: {
        type: Date,
        unique: true,
        required: true,
        default: Date.now
    },
    email: {
        type: String,
        unique: false,
        required: true,        
    },
    path: {
        type: String,
        unique: false,
        required: true,
    },
    type: {
        type: String,
        unique: false,
        required: true,
    },
    result: resultSchema,
});

module.exports = mongoose.model('Images', imageSchema);