import _ from 'lodash'
import dbConnect from 'lib/dbConnect'
import User from 'models/User'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const users = await User.findById(req.query.id)
                res.status(200).json({ success: true, data: _.omit(users, ['password']) })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'PUT':
            try {
                const users = await User.findByIdAndUpdate(req.query.id, {
                    ...req.body
                }, { upsert: true });
                res.status(200).json({ success: true, data: _.omit(users, ['password']) })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const users = await User.findByIdAndDelete(req.query.id);
                res.status(200).json({ success: true, data: _.omit(users, ['password']) })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}