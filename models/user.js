const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

UserSchema.method('toJSON', function(){
    const { __v, password, ...object } = this.toObject(); 
    //object.uid = _id;
    return object;
})

module.exports = model('User',UserSchema);


