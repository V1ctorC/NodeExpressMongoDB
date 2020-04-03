const mongoose = require('mongoose');
const dbConnect = require('./dbInfos');

const connect = mongoose.connect(`mongodb+srv://${ dbConnect.name }:${ dbConnect.password }@${ dbConnect.url }`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = connect;