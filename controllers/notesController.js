const Note = require('../models/note');

const createNote = async(req, res) => {

    const id = req.id;

    const note = new Note(req.body);
    note.idUser = id;

    try {
        const noteSaved = await note.save();
        res.json({
            noteSaved
        });
    } catch(error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            message: 'error saving note'
        });
    }


    
}


const getNotes = async(req, res) => {

    const idUser = req.id;

    try {
        const notesFound = await Note.find({idUser});
        res.json({
            notesFound
        });
    } catch(error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            message: 'error getting notes'
        });
    }

}

const editNote = async(req, res) => {

    const id = req.params.id;

    try {
        const noteUpdated = await Note.findByIdAndUpdate(id, req.body, {new: true});

        res.json({
            noteUpdated
        })
    } catch(error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            message: 'error update Note'
        });
    }

}

const deleteNote = async(req, res) => {
    const id = req.params.id;

    try {
        const noteRemoved = await Note.findByIdAndRemove(id);

        res.json({
            noteRemoved
        })
    } catch(error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            message: 'error removed Note'
        });
    }

}


module.exports = {
    createNote,
    getNotes,
    editNote,
    deleteNote,
}


