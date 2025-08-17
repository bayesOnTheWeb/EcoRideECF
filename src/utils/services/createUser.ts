import prisma from '../../../lib/prisma'
import { hashPassword } from './hashPassword'

interface UserInput {
    username: string
    password: string
    email: string
}

export async function createUser(user: UserInput) {
    try {
        const hashedPassword = await hashPassword({ password: user.password })

        const addedUser = await prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: hashedPassword,
                role: { connect: { type: 'USER' } }, // obligatoire
            },
        })

        return addedUser
    } catch (error) {
        console.error('Erreur création utilisateur :', error)
        throw new Error("Échec lors de la persistance de l'utilisateur en DB")
    }
}
