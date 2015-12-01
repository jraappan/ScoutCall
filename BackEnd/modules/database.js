var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/scoutCallDb', connectionStatus);

function connectionStatus(err,ok){
    if(err){
        console.log(err.message);
    } else{
        console.log("Connected");
    }
}
var User = mongoose.model('User',{
    userEmail:{type:String,unique:true},
    password:String,
    scouts:[{type:mongoose.Schema.Types.ObjectId,ref:'Scout'}]
});
var Scout = mongoose.model('Scout',{
    groupName:String,
    role:String,
    firstName:String,
    lastName:String,
    scoutName:String,
    mobile:String,
    email:String,
    weeklyStatus:[Boolean],
    parentName:String,
    parentMobile:String,
    parentEmail:String,   
},'scout');
// Using exports object you expose the data to other modules
exports.Scout = Scout;
exports.ScoutGroup = User;