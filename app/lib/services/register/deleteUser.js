import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userId = 1; // Remplace par l'ID que tu veux supprimer

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });
    console.log('Utilisateur supprimé:', deletedUser);
  } catch (error) {
    console.error('Erreur lors de la suppression:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
