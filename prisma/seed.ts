import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create some players
  const viratKohli = await prisma.player.create({
    data: {
      name: 'Virat Kohli',
      dateOfBirth: new Date('1988-11-05'),
      country: 'India',
    },
  })

  const steveSmith = await prisma.player.create({
    data: {
      name: 'Steve Smith',
      dateOfBirth: new Date('1989-06-02'),
      country: 'Australia',
    },
  })

  // Create some matches
  await prisma.match.create({
    data: {
      date: new Date('2024-01-15'),
      venue: 'MCG',
      result: 'India won by 5 wickets',
      players: {
        connect: [
          { id: viratKohli.id },
          { id: steveSmith.id },
        ],
      },
    },
  })
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
