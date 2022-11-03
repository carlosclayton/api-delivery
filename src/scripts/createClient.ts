import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const result = await prisma.deliveries.create({
        data: {
            client_id: "29c8217f-7170-4593-bd10-7ab3f42f3f56",
            item_name: "Abajur"
        }
    })

    console.log(result)
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