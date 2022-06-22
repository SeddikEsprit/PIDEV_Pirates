var mongoose=require('mongoose')
var schema=mongoose.Schema
var EspeceChasse=require('./especeChasse')
const {Schema} = require("mongoose");


var localisationChasse=new schema({
    longitude:Number,
    latitude:Number,
    nom:String,
    description:String,
    especes:[{ type: Schema.Types.ObjectId, ref: 'EspeceChasse' }]

})

var LocalisationChasse=mongoose.model('localisationChasse',localisationChasse)
module.exports=LocalisationChasse
