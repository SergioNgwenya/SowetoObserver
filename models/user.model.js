const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: {type: String},
    profile: {},
    picture: {type: String},
    displayName: {type: String},
    role: {type: String, default: "user", enum: ["admin", "user", "editor"]}
});

userSchema.methods.generateHash = (googleId)=>{
    return bcrypt.hashsync(googleId, bcrypt.genSaltSync(8), null);
};



module.exports = mongoose.model("User", userSchema);