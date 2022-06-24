var mongoose=require('mongoose')
const {Schema} = require("mongoose");
var schema=mongoose.Schema

var especeChasse=new schema({
    _id: Schema.Types.ObjectId,
    nom:String,
    description:String,
    photo:String,
    localisation:[{ type: Schema.Types.ObjectId, ref: 'Localisation' }],

})

var EspeceChasse=mongoose.model('especeChasse',especeChasse)
module.exports=EspeceChasse
