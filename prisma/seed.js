const { PrismaClient } = require('@prisma/client')

const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(12)
const hashedPassword = (password) => bcrypt.hashSync(password, salt)

const prisma = new PrismaClient()

const userData = [
  {
    name: 'Chun Warayut',
    username: 'chunwarayut',
    password: hashedPassword('Wsce1122')
  },
  {
    name: 'Warayut Taekrathok',
    username: 'warayut.ta',
    password: hashedPassword('Wsce1122')
  },
  {
    name: 'Admin',
    username: 'admin',
    password: hashedPassword('admin')
  },
  {
    name: 'User',
    username: 'user',
    password: hashedPassword('user')
  }
]

async function main() {
  console.log(`Start seeding ...`)
  await prisma.user.deleteMany()
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
