const multer = require('multer');

const MIMI_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg': 'jpg',
    'image/png' : 'png'
};

const storage = multer.diskStorage({
   destination: (req, file, callback) => {
       callback(null, 'images')
   },
    filename: (req, file, callback) => {
       const name = file.originalname.split(' ').join('_');
       const extension = MIMI_TYPES[file.mimeType];
       callback('null', name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage}).single('image');