const mongoose = require('mongoose')

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb+srv://C4d:C4d@cluster0.wfong.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;  


mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    
    
})
    .then(db => console.log("Base de datos Conectada"))
    .catch(err => console.log(err));    
    