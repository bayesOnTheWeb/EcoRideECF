import bcrypt from 'bcrypt'

interface HashPasswordInput {
    password: string
}

export async function hashPassword(user: HashPasswordInput) {
    try {
        const { password } = user
        const hash = await bcrypt.hash(password, 10)
        console.log('hash du mot de passe effectué')
        return hash
    } catch (error) {
        console.error('erreur lors du hash du mot de passe')
        throw new Error('hash du mot de passe non effectué')
    }
}
