const { Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    deadline:{
        type: String,
        required: true
    },
    createDate:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    idUser:{
        type: String,
        required: true
    }
});

NoteSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject(); 
    return object;
});

module.exports = model('Note', NoteSchema);
