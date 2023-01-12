
import dbConnect from 'lib/dbConnect'
import User from 'models/User'
import _ from 'lodash'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const users = await User.find({})
                res.status(200).json({ success: true, data: users })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const checkUser = await User.find({ username: { '$regex': req.body.username, '$options': 'i' } })
                if (checkUser.length === 0) {
                    const users = await User.create({ ...req.body })
                    res.status(201).json({ success: true, data: _.omit(users, ['password']) })
                } else {
                    res.status(400).json({ success: false, message: "มีในระบบแล้ว" })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}