import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)