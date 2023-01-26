import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.user.findMany()

    console.log(allUsers)
    //create a new user
    // const newUser = await prisma.user.create({
    //     data: {
    //         name: 'Oogway',
    //         email: "email",
    //     },
    // })

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