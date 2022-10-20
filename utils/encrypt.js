
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(12)
export const hashedPassword = (password) => bcrypt.hashSync(password, salt)
export const comparePassword = async (password, hashedPassword) => await bcrypt.compare(password, hashedPassword);