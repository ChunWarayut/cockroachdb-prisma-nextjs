import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)