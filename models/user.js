var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    category1_items: [{type: Schema.Types.ObjectId, ref: 'Category1_item'}],
    category2_items: [{type: Schema.Types.ObjectId, ref: 'Category2_item'}],
    category3_items: [{type: Schema.Types.ObjectId, ref: 'Category3_item'}],
    category4_items: [{type: Schema.Types.ObjectId, ref: 'Category4_item'}],
    category5_items: [{type: Schema.Types.ObjectId, ref: 'Category5_item'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);