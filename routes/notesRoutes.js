// api/notes

const { Router } = require('express');
const { createNote, getNotes, editNote, deleteNote } = require('../controllers/notesController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = Router();

router.post('/createnote', [
    verifyToken,
], createNote);

router.get('/getnotes', [
    verifyToken,
], getNotes);

router.put('/updatenote/:id', [
    verifyToken,
], editNote);

router.delete('/deletenote/:id', [
    verifyToken,
], deleteNote);

module.exports = router;
