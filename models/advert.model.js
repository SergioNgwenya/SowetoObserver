const mongoose = require('mongoose');
const { Schema } = mongoose;
//Creating a schema model for user information to POST to the database
const advertSchema = new Schema({
    title: { type: String },
<<<<<<< HEAD:models/advert.model.js
    picture:{ type: String },
=======
>>>>>>> 5dbeb8069b15483d2932beffb2b73b7a704b2109:models/advert.model.js
    isDraft: { type: Boolean, default: true }, //Critical
    url: { type: String},
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model('Advert', advertSchema);//Exporting the model to be available to routes