const mongoose = require('mongoose')
const DevSchema= new mongoose.Schema({
    name: String,
    githeb_username: String,
    avatar_url: String,
    techs: [String],
    

})
module.exports = mongoose.model('Dev', DevSchema);