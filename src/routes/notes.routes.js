const { Router } = require('express')
const router = Router()

const { renderNoteForm, 
        createNewNote, 
        renderNotes, 
        renderEditForm, 
        renderUpdateNote, 
        renderDeleteNote 
    } = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/validate')

//NUEVAS NOTAS
router.get('/notes/add',isAuthenticated, renderNoteForm)

router.post('/notes/new-note',isAuthenticated, createNewNote)

//OBTENER TODAS LAS NOTAS
router.get('/notes',isAuthenticated, renderNotes)

//EDITAR NOTAS
router.get('/notes/edit/:id',isAuthenticated, renderEditForm)

//PUT, Hace referencia a algo que ya existe
router.put('/notes/edit/:id',isAuthenticated, renderUpdateNote)

//BORRAR NOTAS
router.delete('/notes/delete/:id', isAuthenticated, renderDeleteNote)

module.exports = router