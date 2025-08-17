import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Vérifie si le rôle USER existe déjà
  const existingRole = await prisma.role.findUnique({
    where: { type: 'USER' },
  });

  if (!existingRole) {
    await prisma.role.create({
      data: { type: 'USER' },
    });
    console.log('Rôle USER créé');
  } else {
    console.log('Rôle USER existe déjà');
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
