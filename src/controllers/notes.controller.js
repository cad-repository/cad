const notesCtrl = {};

const Notes = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => { 
    res.render('notes/new-note');
};
notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote= new Notes({title, description});
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Nota Agregada Correctamente');
    res.redirect('/notes');
};

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Notes.find({user : req.user.id}).sort({createdAt: 'desc'});
    res.render('notes/all-notes',{ notes });
};

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Notes.findById(req.params.id);
    if(note.user != req.user.id){
        req.flash('error_msg', 'No tiene permisos');
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', { note });
};

notesCtrl.renderUpdateNote = async(req, res) => {
    const {title, description} = req.body;
   await Notes.findByIdAndUpdate(req.params.id, {title, description})
   req.flash('success_msg', 'Nota Actualizada');
    res.redirect('/notes')
};

notesCtrl.renderDeleteNote = async(req, res) => {
   await Notes.findByIdAndDelete(req.params.id);
   req.flash('success_msg', 'Nota Eliminada Correctamente');
   res.redirect('/notes');
};


module.exports = notesCtrl;